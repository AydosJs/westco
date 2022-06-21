import React, { createContext, useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AuthPayload } from '../containers/auth/RegisterContainer';


export interface AuthContextType {
  token?: TokenResponse;
  isLoggedIn?: boolean;
  loader: boolean;
  signIn: (payload: AuthPayload) => Promise<unknown>;
  register: (payload: AuthPayload) => Promise<unknown>;
  setLoader: any;
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
  const [isLoggedIn, setLoggedIn] = useState<boolean>(Boolean(token?.token));
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


  const value = { token, loader, isLoggedIn, signIn, register, setLoader };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
