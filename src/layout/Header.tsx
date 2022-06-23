import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUser } from "../api/userApi";
import { AuthContext, IUser } from "../providers/AuthProvider";
interface Props {
  toggleMenu: any
}

export default function Header({ toggleMenu }: Props) {

  const { isLoggedIn, token, setLoader } = useContext(AuthContext);

  const [user, setUser] = useState<IUser>({} as IUser)

  const getUserProfile = async () => {
    try {
      setLoader(true)
      const res = await getUser()
      setUser(res.data.data)
      console.log('resssssssss', res)
    } catch (error) {
      console.log('error', error)
    } finally {
      setLoader(false)
    }
  }

  useEffect(() => {
    getUserProfile()
  }, [])


  return (
    <header className="p-6 w-full bg-white fixed z-20 border-b left-0 top-0 h-fit">
      <div className="flex flex-row justify-between items-center h-full">

        <div >
          <Link to="/librari" className="flex flex-row space-x-2 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2"
              className="w-7 h-7 text-white p-1.5 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <h6 className="text-xl font-bold">WESTCO</h6>
          </Link>
        </div>


        <div className="flex flex-row space-x-2 items-center">

          {isLoggedIn &&
            <Link className="hidden lg:flex flex-row items-center text-gray-600 hover:text-blue-500 first-letter:uppercase text-md" to="/user-profile">
              {user?.fullName}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </Link>}

          {(!isLoggedIn && token?.token === '') &&
            <div className="hidden lg:flex space-x-4 flex-row">
              <Link className="p-2 border rounded py-1 hover:border-blue-400 flex flex-row space-x-2 items-center text-md text-gray-600 font-medium hover:text-blue-500" to="/sign-in">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
                Sign-In
              </Link>
              <Link
                to="/register"
                className="p-2 border rounded py-1 hover:border-blue-400 flex flex-row space-x-2 items-center text-md text-gray-600 font-medium hover:text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
                Sign-Up
              </Link>
            </div>
          }

          <span
            onClick={toggleMenu}
            className={'lg:hidden text-gray-600 hover:text-blue-500 cursor-pointer'}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </span>

        </div>
      </div>
    </header>
  )
}