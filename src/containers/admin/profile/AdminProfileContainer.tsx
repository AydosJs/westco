import React, { useContext, useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';
import { getAdminProfile } from '../../../api/admin/adminApi';
import Button from '../../../components/form-elements/Button';
import { AuthContext } from '../../../providers/AuthProvider';
import LoaderContainer from '../../loader/LoaderContainer';
import { IRole } from './SignInAdminProfileContainer';

export interface IAdmin {
  _id: string,
  firstName: string,
  lastName: string,
  phoneNumber: string,
  password: string,
  biography: string,
  roleId: string,

  role: IRole,
  fullName?: string
}

export default function AdminProfileContainer() {
  const { loader, setLoader, isAdmin, tokenAdmin } = useContext(AuthContext);
  const [admin, setAdmin] = useState<IAdmin>({} as IAdmin)

  const getAdminProfileFn = async () => {
    try {
      setLoader(true)
      const res = await getAdminProfile()
      setAdmin(res.data.data)
      console.log('res', res)
    } catch (error) {
      console.log('error', error)
    } finally {
      setLoader(false)
    }
  }

  useEffect(() => {
    getAdminProfileFn()
  }, [])

  if (!isAdmin || tokenAdmin?.token === '') {
    return <Navigate to={'/admin/sign-in'} />;
  }

  return (
    <>
      {loader && <LoaderContainer />}
      <div className="flex flexr-row space-x-4">
        <div className="flex flex-col bg-white rounded w-1/3 p-6 divide-y">
          <div className="flex justify-center mb-6 py-4">
            <img className="w-44 rounded-full p-2.5 border" src="https://faeziedu.ir/wp-content/uploads/2021/05/avatar.jpg.320x320px.jpg" alt={admin.firstName} />
          </div>
          <div className="flex flex-row py-4">
            <p className="text-md font-medium w-1/3 text-gray-600">Full name: </p>
            <p className="text-md font-medium w-2/3 text-gray-900">{admin?.fullName}</p>
          </div>
          <div className="flex flex-row py-4">
            <p className="text-md font-medium w-1/3 text-gray-600">Role: </p>
            <p className="text-md font-medium w-2/3 text-gray-900">{admin.role?.name}</p>
          </div>

          <Button className={'mt-6'}>
            Edit Profile
          </Button>

        </div>
        <div className="bg-white rounded flex flex-col space-y-4 w-2/3">

        </div>
      </div>
    </>
  )
}