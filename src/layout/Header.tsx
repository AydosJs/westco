import { Link } from "react-router-dom";
import Button from "../components/form-elements/Button";
interface Props {
  toggleMenu: any
}

export default function Header({ toggleMenu }: Props) {
  return (
    <header className="p-6 w-full bg-white fixed z-20 border-b left-0 top-0 h-fit">
      <div className="flex flex-row justify-between items-center h-full">
        <div>
          <Link to="/librari">
            <h6 className="text-xl font-bold">WESTCO</h6>
          </Link>
        </div>
        <div className="flex flex-row space-x-2">
          <Link className="hidden lg:block text-gray-600 hover:text-blue-500" to="/user-profile">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </Link>

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