import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCoursesAdmin } from '../../../api/admin/coursesApi';
import Button from '../../../components/form-elements/Button'
import TextField from '../../../components/form-elements/TextField'
import { DEFAULT_FILTER } from '../../../constants/Constants';
import { AuthContext } from '../../../providers/AuthProvider';
import { ICourse } from '../../client/courses/CoursesContainer';
import { IQueryFilter } from '../../client/librari/LibrariContainer';
import LoaderContainer from '../../loader/LoaderContainer';

export default function CoursesList() {

  const { loader, setLoader } = useContext(AuthContext);
  const filter: IQueryFilter = DEFAULT_FILTER
  const [courses, setCourses] = useState([] as ICourse[])

  const getCoursesFn = async () => {
    try {
      if (loader) return
      setLoader(true)
      const res = await getCoursesAdmin(filter)
      console.log('ADMIN res', res);
      setCourses(res?.data?.data?.data)
    } catch (error) {
      console.log('error', error)
    } finally {
      setLoader(false)
    }
  }

  useEffect(() => {
    getCoursesFn()
  }, [])

  return (
    <div>

      {loader && <LoaderContainer />}

      <div className="mb-10 relative rounded bg-white overscroll-x-auto">

        <div className='bg-white flex flex-row flex-nowrap w-full border-b-[0.5px] p-4 space-x-4 '>
          <TextField className='w-3/3' placeholder='Search...' />
          <Link to={'/admin/create-course'}>
            <Button className={'h-[42px]'}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </Button>
          </Link>
        </div>

        <table className="w-full text-sm text-left text-gray-900 text-ellipsis">
          <thead className="text-xs uppercase border-b bg-gray-100 text-gray-900">
            <tr>
              <th scope="col" className="px-6 py-4">
                #
              </th>
              <th scope="col" className="px-6 py-4">
                Book name
              </th>
              <th scope="col" className="px-6 py-4">
                Description
              </th>
              <th scope="col" className="px-6 py-4">
                Created at
              </th>
            </tr>
          </thead>
          <tbody className='divide-slate-100 divide-y-[0.5px] overflow-x-auto'>
            {(courses.length !== 0 && !loader) ? courses?.map((item: ICourse, index: number) => (
              <tr className="cursor-pointer group">
                <td className="w-4 p-4 px-6 font-normal text-md text-gray-400 group-hover:text-gray-900  ">
                  {index}
                </td>
                <th scope="row" className="px-6 py-4 text-gray-600 group-hover:text-gray-900 font-normal group-hover:underline text-md whitespace-nowrap">
                  <Link to={`/courses/${item?._id}`}>
                    {item?.name}
                  </Link>
                </th>
                <td className="px-6 w-1/3 py-4 text-gray-600 group-hover:text-gray-900 font-normal text-md whitespace-nowrap">
                  <span className='max-w-[900px] block overflow-hidden text-ellipsis'>{item?.description}</span>
                </td>
                <td className="px-6 py-4 text-gray-600 group-hover:text-gray-900 font-normal text-md whitespace-nowrap">
                  23 May 2022
                </td>
              </tr>
            )) : (
              <th scope="row" className="px-6 py-4 text-gray-600 group-hover:text-gray-900 font-normal text-md whitespace-nowrap">
                Loading
              </th>
            )}
          </tbody>
        </table>
        <div className='border-t bg-white flex flex-row flex-nowrap w-full border-b-[0.5px] p-4 space-x-4 '>
          pagination
        </div>
      </div>
    </div>
  )
}