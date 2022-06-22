import React, { createContext, useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AuthPayload } from '../containers/auth/RegisterContainer';
import { signInAdmin } from '../api/admin/adminApi';
import { AdminPayload } from '../containers/admin/profile/SignInAdminProfileContainer';
import { IAdmin } from '../containers/admin/profile/AdminProfileContainer';


export interface AuthContextType {
  token?: TokenResponse;
  tokenAdmin?: TokenResponse;
  isLoggedIn?: boolean;
  isAdmin?: boolean;
  loader: boolean;
  signIn: (payload: AuthPayload) => Promise<unknown>;
  register: (payload: AuthPayload) => Promise<unknown>;
  signInAdminFn: (payload: AdminPayload) => Promise<unknown>;
  setLoader: any;
  setAsLoggedOut: any,
  admin: IAdmin
}

export interface IUser {
  fullName: string,
  _id: string,
  createdAt: string
}

export type TokenResponse = {
  token: string;
  user?: IUser;
};

type Props = {
  children: React.ReactNode;
};

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export default function AuthProvider({ children }: Props) {
  const axios = require('axios').default;
  const [token, setToken] = useState<TokenResponse | undefined>({
    token: Cookies.get('token') || '',
  } as TokenResponse);
  const [tokenAdmin, setTokenAdmin] = useState<TokenResponse | undefined>({
    token: Cookies.get('tokenAdmin') || '',
  } as TokenResponse);
  const [isLoggedIn, setLoggedIn] = useState<boolean>(Boolean(token?.token));
  const [isAdmin, setIsAdmin] = useState<boolean>(Boolean(tokenAdmin?.token));
  const [admin, setAdmin] = useState<IAdmin>(null as any);
  const [loader, setLoader] = useState<boolean>(false);
  const navigate = useNavigate();

  const setAsLoggedIn = (resp: TokenResponse) => {
    if (resp?.token) {
      setToken(resp);
      setLoggedIn(true);
      Cookies.set('token', resp.token);
      toast.success('Successfully');
      navigate('/librari');
    }

    return resp;
  };
  const setAsLoggedOut = () => {
    setToken({ token: '' });
    setLoggedIn(false);
    setIsAdmin(false);
    Cookies.set('token', '');
    Cookies.set('tokenAdmin', '');
    toast.success('Successfully logged out');
    navigate('/librari');
  };

  const setCatchLogin = (error: Error) => {
    setLoggedIn(false);
    toast.error(error.message);
  };

  const signIn = (payload: AuthPayload) => {
    setLoader(true);
    return axios.post('https://coursesnodejs.herokuapp.com/user/sign-in', payload)
      .then((res: any) => setAsLoggedIn(res.data.data))
      .catch(setCatchLogin)
      .finally(() => {
        setLoader(false);
      });
  };

  const register = (payload: AuthPayload) => {
    setLoader(true);
    return axios.post('https://coursesnodejs.herokuapp.com/user/sign-up', payload)
      .then((res: any) => setAsLoggedIn(res.data.data))
      .catch(setCatchLogin)
      .finally(() => {
        setLoader(false);
      });
  };

  const signInAdminFn = (payload: AdminPayload) => {
    // console.log("PAYLOAD AMDIN LOGIN", payload)
    setLoader(true);
    return signInAdmin(payload)
      .then((res: any) => {
        setTokenAdmin({ token: res.data?.data?.token })
        setAdmin(res.data.data?.employee)
        // console.log('redponse admin', res.data.data)
        setIsAdmin(true)
        Cookies.set('tokenAdmin', res.data?.data?.token);
        toast.success('Successfully logged in');
        navigate('/admin/profile');
      })
      .catch((error) => {
        setIsAdmin(false)
        toast.error(error.message);
      })
      .finally(() => {
        setLoader(false);
      });
  };


  const value = { token, loader, isLoggedIn, signIn, register, setLoader, isAdmin, signInAdminFn, setAsLoggedOut, admin };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
