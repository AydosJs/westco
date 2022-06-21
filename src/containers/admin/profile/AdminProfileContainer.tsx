import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

type Props = {}

export default function AdminProfileContainer({ }: Props) {
  const { isAdmin } = useContext(AuthContext);

  if (!isAdmin) {
    return <Navigate to={'/admin/sign-in'} />;
  }

  return (
    <div>AdminProfileContainer</div>
  )
}