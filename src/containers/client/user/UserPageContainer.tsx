import dayjs from "dayjs";
import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { getUser } from "../../../api/userApi";
import Button from "../../../components/form-elements/Button";
import { AuthContext, IUser } from "../../../providers/AuthProvider";
import LoaderContainer from "../../loader/LoaderContainer";

export default function UserPageContainer() {
  const { isLoggedIn, loader, setLoader } = useContext(AuthContext);
  const [user, setUser] = useState<IUser>({} as IUser)

  const getUserProfile = async () => {
    try {
      setLoader(true)
      const res = await getUser()
      setUser(res.data.data)
      console.log('res', res)
    } catch (error) {
      console.log('error', error)
    } finally {
      setLoader(false)
    }
  }

  useEffect(() => {
    getUserProfile()
  }, [])

  // if (!isLoggedIn) {
  //   return <Navigate to={'/librari'} />;
  // }

  return (
    <>
      {loader && <LoaderContainer />}
      <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row lg:flex-row md:space-x-4">
        <div className="flex flex-col bg-white rounded p-6 divide-y md:w-3/6 lg:w-1/3">
          <div className="flex justify-center mb-6 py-4">
            <img className="w-44 rounded-full p-2.5 border" src="https://faeziedu.ir/wp-content/uploads/2021/05/avatar.jpg.320x320px.jpg" alt={user.fullName} />
          </div>
          <div className="flex flex-row py-4">
            <p className="text-md font-medium w-1/3 text-gray-600">Full name: </p>
            <p className="text-md font-medium w-2/3 text-gray-900">{user?.fullName}</p>
          </div>
          <div className="flex flex-row py-4">
            <p className="text-md font-medium w-1/3 text-gray-600">Created At: </p>
            <p className="text-md font-medium w-2/3 text-gray-900">{dayjs(user?.createdAt).format('MMMM D, YYYY')}</p>
          </div>

          <Button className={'mt-6'}>
            Edit Profile
          </Button>

        </div>
        <div className="bg-white rounded flex flex-col space-y-4 md:w-3/6 lg:w-2/3">
        </div>
      </div>
    </>
  )
}