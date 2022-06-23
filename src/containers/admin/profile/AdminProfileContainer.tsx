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
      <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row lg:flex-row md:space-x-4">

        <div className="flex flex-col bg-white rounded p-6 divide-y md:w-3/6 lg:w-1/3">
          <div className="flex justify-center mb-6 py-4">
            <img className="w-44 rounded-full p-2.5 border" src="https://faeziedu.ir/wp-content/uploads/2021/05/avatar.jpg.320x320px.jpg" alt={admin.firstName} />
          </div>
          <div className="flex flex-row py-4 space-x-2 lg:space-x-0">
            <p className="text-md font-medium w-1/3 text-gray-600 flex flex-ro items-center flex-nowrap  text-ellipsis whitespace-nowrap">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Full name:
            </p>
            <p className="text-md font-medium w-2/3 text-gray-900">{admin?.fullName}</p>
          </div>
          <div className="flex flex-row py-4 space-x-2 lg:space-x-0">
            <p className="text-md font-medium w-1/3 text-gray-600 flex flex-ro items-center flex-nowrap  text-ellipsis whitespace-nowrap">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Role:
            </p>
            <p className="text-md font-medium w-2/3 text-gray-900">{admin?.role?.name}</p>
          </div>

          <Button className={'mt-6'}>
            Edit Profile
          </Button>

        </div>

        <div className="bg-white rounded flex flex-col space-y-4  md:w-3/6 lg:w-2/3">

        </div>
      </div>
    </>
  )
}