import { Link, useLocation } from "react-router-dom";

export default function Navigation() {
  const { pathname } = useLocation()

  return (
    <nav className="hidden lg:flex max-w-[256px] min-w-[256px] min-h-screen bg-white px-4 py-2.5 flex-col space-y-4">
      <div className="py-4">
        <Link to="/librari">
          <h6 className="ml-2.5 text-xl font-bold">WESTCO</h6>
        </Link>
      </div>

      <ul className="flex flex-col space-y-2 ">
        <li className="p-2 rounded flex flex-row flex-nowrap space-x-2 items-center text-sm font-medium text-slate-500 hover:text-blue-500 group cursor-pointer ">
          <p className="text-xs font-medium text-gray-400">MAIN</p>
        </li>

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


      <ul className="flex flex-col space-y-2 ">
        <li className="p-2 rounded flex flex-row flex-nowrap space-x-2 items-center text-sm font-medium text-slate-500 hover:text-blue-500 group cursor-pointer ">
          <p className="text-xs font-medium text-gray-400">ADMIN PANEL</p>
        </li>

        <Link to="/create-books">
          <li className={`${pathname === '/create-books' ? 'text-blue-500' : 'text-slate-500 '} p-2 rounded flex flex-row flex-nowrap space-x-4 items-center text-sm font-medium hover:text-blue-500 group cursor-pointer`}>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </span>
            <h6 className=" text-md font-medium">Create Books</h6>
          </li>
        </Link>
        <Link to="/create-courses">
          <li className={`${pathname === '/create-courses' ? 'text-blue-500' : 'text-slate-500 '} p-2 rounded flex flex-row flex-nowrap space-x-4 items-center text-sm font-medium hover:text-blue-500 group cursor-pointer`}>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>
            <h6 className=" text-md font-medium">Create Courses</h6>
          </li>
        </Link>

      </ul>
    </nav>
  )
}