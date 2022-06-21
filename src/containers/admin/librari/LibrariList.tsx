import { useContext, useEffect, useState } from 'react';
import { getBooksAdmin } from '../../../api/admin/librariApi';
import Button from '../../../components/form-elements/Button'
import TextField from '../../../components/form-elements/TextField'
import { AuthContext } from '../../../providers/AuthProvider';
import { IBook } from '../../client/librari/LibrariContainer';

export default function LibrariList() {

  const { loader, setLoader } = useContext(AuthContext);
  const [books, setBooks] = useState([] as IBook[])

  const getBooksFn = async () => {
    try {
      if (loader) return
      setLoader(true)
      const res = await getBooksAdmin()
      console.log('ADMIN res', res);
      setBooks(res?.data?.data?.data)
    } catch (error) {
      console.log('error', error)
    } finally {
      setLoader(false)
    }
  }

  useEffect(() => {
    getBooksFn()
  }, [])

  console.log('ADMIN BOOKS', books);


  return (
    <div className="relative overflow-x-auto rounded bg-white ">
      <div className='bg-white flex flex-row flex-nowrap w-full border-b-[0.5px] p-4 space-x-4 '>
        <TextField className='w-3/3' placeholder='Search...' />
        <div>
          <Button className={'h-[42px]'}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
            </svg>
          </Button>
        </div>
      </div>
      <table className="w-full text-sm text-left text-gray-900">
        <thead className="text-xs uppercase border-b bg-gray-100 text-gray-900">
          <tr>
            <th scope="col" className="px-6 py-4">
              #
            </th>
            <th scope="col" className="px-6 py-4">
              Book name
            </th>
            <th scope="col" className="px-6 py-4">
              Category name
            </th>
            <th scope="col" className="px-6 py-4">
              Descripton
            </th>
            <th scope="col" className="px-6 py-4">
              Created at
            </th>
          </tr>
        </thead>
        <tbody className='divide-slate-100 divide-y-[0.5px]'>
          {Array(13).fill(0).map((item: any, index: number) => (
            <tr className="cursor-pointer group">
              <td className="w-4 p-4 px-6 font-normal text-md text-gray-400 group-hover:text-gray-900 ">
                {index}
              </td>
              <th scope="row" className="px-6 py-4 text-gray-600 group-hover:text-gray-900 font-normal text-md whitespace-nowrap">
                Apple MacBook Pro 17"
              </th>
              <td className="px-6 py-4 text-gray-600 group-hover:text-gray-900 font-normal text-md whitespace-nowrap">
                Sliver
              </td>
              <td className="px-6 py-4 text-gray-600 group-hover:text-gray-900 font-normal text-md whitespace-nowrap">
                Laptop
              </td>
              <td className="px-6 py-4 text-gray-600 group-hover:text-gray-900 font-normal text-md whitespace-nowrap">
                $2999
              </td>
              {/* <td className="px-6 py-4 text-right">
              <a href="#" className="font-medium text-blue-600 hover:underline">Edit</a>
            </td> */}
            </tr>
          ))}
        </tbody>
      </table>
      <div className='border-t bg-white flex flex-row flex-nowrap w-full border-b-[0.5px] p-4 space-x-4 '>
        pagination
      </div>
    </div>
  )
}