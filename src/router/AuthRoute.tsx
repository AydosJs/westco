import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

type Props = {
  children?: React.ReactNode;
};
export default function AuthRoute({ children }: Props) {
  const { isLoggedIn } = useContext(AuthContext);

  if (isLoggedIn) {
    return <Navigate to={'/librari'} />;
  }
  return <>{children ? children : <Outlet />}</>;
}
