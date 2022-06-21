import dayjs from "dayjs";
import React, { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getCourseItem } from "../../api/coursesApi";
import Button from "../../components/form-elements/Button";
import { AuthContext } from "../../providers/AuthProvider";
import LoaderContainer from "../loader/LoaderContainer";


export default function CoursesViewContainer() {
  const { loader, setLoader } = useContext(AuthContext);
  const [coursesItem, setCoursesItem] = useState({} as any)
  const { id } = useParams()

  const getLibrariItem = async () => {
    try {
      if (loader) return
      setLoader(true)
      const res = await getCourseItem(id!)
      setCoursesItem(res?.data?.data)
    } catch (error) {
      console.log('error', error)
    } finally {
      setLoader(false)
    }
  }

  useEffect(() => {
    if (id) {
      getLibrariItem()
    }
  }, [])

  console.log('courses item', coursesItem)


  return (
    <React.Fragment>
      {loader && <LoaderContainer />}


      {Object.keys(coursesItem).length !== 0 && (

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex flex-col bg-white rounded w-full lg:w-2/2 xl:w-1/3 p-6 divide-y h-fit">
            <div className="flex justify-center mb-6">
              <img className="w-full rounded " src={'https://d1ymz67w5raq8g.cloudfront.net/Pictures/1024x536/P/web/n/z/b/onlinecourses_shutterstock_490891228_2000px_728945.jpg'} />
            </div>
            <div className="flex flex-row py-3 border-none items-start">
              <p className="text-md font-medium w-1/2 sm:w-1/2 md:w-2/3 lg:w-1/3 text-gray-600 flex flex-row flex-nowrap space-x-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                <span>
                  Name:
                </span>
              </p>
              <p className="text-md font-medium w-1/2 sm:w-1/2 md:w-2/3 lg:w-2/3 text-gray-900 first-letter:uppercase">{coursesItem?.name}</p>
            </div>
            <div className="flex flex-row py-3 items-start">
              <p className="text-md font-medium w-1/2 sm:w-1/2 md:w-2/3 lg:w-1/3 text-gray-600 flex flex-row flex-nowrap space-x-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>
                  Created At:
                </span>
              </p>
              <p className="text-md font-medium w-1/2 sm:w-1/2 md:w-2/3 lg:w-2/3 text-gray-900 first-letter:uppercase">{dayjs(coursesItem?.createdAt).format('MMMM D, YYYY')}</p>
            </div>
            <div className="flex flex-col py-3 items-start">
              <p className="text-md font-medium w-full text-gray-600 flex flex-row flex-nowrap space-x-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>
                  Description:
                </span>
              </p>
              <p className="text-md font-medium mt-2 w-full text-gray-900 first-letter:uppercase">{coursesItem?.description}</p>
            </div>

            <Button className={'mt-6'}>
              READ THIS BOOK
            </Button>

          </div>

          <div className="flex flex-col bg-white rounded w-full lg:w-2/2 xl:w-2/3 p-6">

          </div>
        </div>
      )}

    </React.Fragment >
  )
}