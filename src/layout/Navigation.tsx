import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

export default function Navigation() {
  const { pathname } = useLocation()
  const { isLoggedIn, isAdmin } = useContext(AuthContext);


  return (
    <nav className="hidden lg:flex max-w-[256px] min-w-[256px] h-full min-h-screen bg-white px-4 py-2.5 flex-col justify-between ">

      <div className="flex-col space-y-4">
        <div className="py-4 rounded-lg ">
          <Link to="/librari">
            <h6 className="ml-2.5 text-xl font-bold">WESTCO</h6>
          </Link>
        </div>

        {/* CLIENT */}
        <ul className="flex flex-col space-y-2">
          <li className="p-2 rounded flex flex-row flex-nowrap space-x-2 items-center text-sm font-medium text-slate-500 hover:text-blue-500 group">
            <p className="text-xs font-medium text-gray-400">CLIENT</p>
          </li>

          <span className="w-full border-b"></span>

          <Link to="/librari">
            <li className={`${pathname === '/librari' ? 'text-blue-500' : 'text-slate-500 '} p-2 rounded flex flex-row flex-nowrap space-x-4 items-center text-sm font-medium hover:text-blue-500 group cursor-pointer`}>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
              </span>
              <h6 className=" text-md font-medium">Librari</h6>
            </li>
          </Link>
          <Link to="/courses">
            <li className={`${pathname === '/courses' ? 'text-blue-500' : 'text-slate-500 '} p-2 rounded flex flex-row flex-nowrap space-x-4 items-center text-sm font-medium hover:text-blue-500 group cursor-pointer`}>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <h6 className=" text-md font-medium">Courses</h6>
            </li>
          </Link>
          <Link to="/categories">
            <li className={`${pathname === '/categories' ? 'text-blue-500' : 'text-slate-500 '} p-2 rounded flex flex-row flex-nowrap space-x-4 items-center text-sm font-medium hover:text-blue-500 group cursor-pointer`}>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
              </span>
              <h6 className=" text-md font-medium">Categories</h6>
            </li>
          </Link>
        </ul>


        {/* ADMIN */}
        {isAdmin ? (
          <ul className="flex flex-col space-y-2">
            <li className="p-2 rounded flex flex-row flex-nowrap space-x-2 items-center text-sm font-medium text-slate-500 hover:text-blue-500 group">
              <p className="text-xs font-medium text-gray-400">ADMIN PANEL</p>
            </li>

            <span className="w-full border-b"></span>


            <Link to="/admin/book-list">
              <li className={`${pathname === '/admin/library-list' ? 'text-blue-500' : 'text-slate-500 '} p-2 rounded flex flex-row flex-nowrap space-x-4 items-center text-sm font-medium hover:text-blue-500 group cursor-pointer`}>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </span>
                <h6 className=" text-md font-medium">Create Books</h6>
              </li>
            </Link>
            <Link to="/admin/courses-list">
              <li className={`${pathname === '/admin/courses-list' ? 'text-blue-500' : 'text-slate-500 '} p-2 rounded flex flex-row flex-nowrap space-x-4 items-center text-sm font-medium hover:text-blue-500 group cursor-pointer`}>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <h6 className=" text-md font-medium">Create Courses</h6>
              </li>
            </Link>
          </ul>
        ) : null}

      </div>

      {/* PROFILE */}
      <div className="flex-col space-y-4 mb-4">
        <ul className="flex flex-col space-y-2 ">
          <span className="w-full border-b"></span>
          <Link to="/admin/profile">
            <li className={`${pathname === '/admin/profile' ? 'text-blue-500' : 'text-slate-500 '} p-2 rounded flex flex-row flex-nowrap space-x-4 items-center text-sm font-medium hover:text-blue-500 group cursor-pointer`}>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </span>
              <h6 className=" text-md font-medium"> {isAdmin ? 'Admin profile' : 'Sign-in Admin profile'}</h6>
            </li>
          </Link>
          {isLoggedIn && (
            <Link to="/user-profile">
              <li className={`${pathname === '/user-profile' ? 'text-blue-500' : 'text-slate-500 '} p-2 rounded flex flex-row flex-nowrap space-x-4 items-center text-sm font-medium hover:text-blue-500 group cursor-pointer`}>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <h6 className=" text-md font-medium">User profile</h6>
              </li>
            </Link>
          )}
        </ul>
      </div>

    </nav>
  )
}