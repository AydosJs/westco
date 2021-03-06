import dayjs from "dayjs";
import React, { useContext, useEffect, useState } from "react"
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom"
import { getCourseItem } from "../../../api/coursesApi";
import CourseVideoItemComponent from "../../../components/CoursesComponent/CourseVideoItemComponent";
import Button from "../../../components/form-elements/Button";
import { imgUrlController } from "../../../constants/Constants";
import { AuthContext } from "../../../providers/AuthProvider";
import LoaderContainer from "../../loader/LoaderContainer";


export default function CoursesViewContainer() {
  const { isLoggedIn, loader, setLoader } = useContext(AuthContext);
  const [coursesItem, setCoursesItem] = useState({} as any)
  const { id } = useParams()
  const navigate = useNavigate();



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

  // console.log('courses item', coursesItem)


  return (
    <React.Fragment>
      {loader && <LoaderContainer />}

      {Object.keys(coursesItem).length !== 0 && (
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">

          <div className="flex flex-col bg-white rounded w-full p-6 divide-y h-fit md:w-1/3 lg:w-2/2 xl:w-1/3">
            <div className="flex justify-center mb-6">
              <img className="w-full rounded object-cover object-center max-h-60" src={imgUrlController(coursesItem?.imgUrl)} />
            </div>
            <div className="flex flex-row py-3 border-none items-start">
              <p className="text-sm font-medium w-1/2 sm:w-1/2 md:w-2/3 lg:w-1/3 text-gray-600 flex flex-row flex-nowrap space-x-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
                <span>
                  Rate:
                </span>
              </p>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              </div>
            </div>
            <div className="flex flex-row py-3 items-start">
              <p className="text-sm font-medium w-1/2 sm:w-1/2 md:w-2/3 lg:w-1/3 text-gray-600 flex flex-row flex-nowrap space-x-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                <span>
                  Name:
                </span>
              </p>
              <p className="text-sm font-medium w-1/2 sm:w-1/2 md:w-2/3 lg:w-2/3 text-gray-900 first-letter:uppercase">{coursesItem?.name}</p>
            </div>
            <div className="flex flex-row py-3 items-start">
              <p className="text-sm font-medium w-1/2 sm:w-1/2 md:w-2/3 lg:w-1/3 text-gray-600 flex flex-row flex-nowrap space-x-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>
                  Created At:
                </span>
              </p>
              <p className="text-sm font-medium w-1/2 sm:w-1/2 md:w-2/3 lg:w-2/3 text-gray-900 first-letter:uppercase">{dayjs(coursesItem?.createdAt).format('MMMM D, YYYY')}</p>
            </div>
            <div className="flex flex-row py-3 items-start">
              <p className="text-sm font-medium w-1/2 sm:w-1/2 md:w-2/3 lg:w-1/3 text-gray-600 flex flex-row flex-nowrap space-x-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span>
                  Amount:
                </span>
              </p>
              <p className="text-sm font-medium w-1/2 sm:w-1/2 md:w-2/3 lg:w-2/3 text-gray-900 first-letter:uppercase">25 hours on-demand video</p>
            </div>
            <div className="flex flex-col py-3 items-start">
              <p className="text-sm font-medium w-full text-gray-600 flex flex-row flex-nowrap space-x-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span >
                  Description:
                </span>
              </p>
              <p className="overflow-hidden text-ellipsis whitespace-normal text-sm font-medium mt-4 w-full text-gray-900 first-letter:uppercase">{coursesItem?.description}</p>
            </div>

            <Button className={'mt-6'}
              onClick={() => {
                if (isLoggedIn) {
                  toast.success('Course Successfully added');
                } else {
                  toast.error('Please register first');
                  navigate('/register')
                }
              }}
            >
              ADD TO CARD
            </Button>

          </div>

          <div className="bg-white rounded w-full  md:w-2/3 lg:w-2/2 xl:w-2/3 p-6">

            <div className="mb-10">
              <div className="mb-6 bg-gray-100 rounded border min-h-48 h-64 md:h-96 flex items-center justify-center cursor-pointer group">
                {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-40 w-40 text-gray-400 group-hover:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg> */}
                <iframe className="w-full h-full rounded" src="https://www.youtube.com/embed/W6NZfCO5SIk" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <h1 className="text-gray-700 text-2xl mb-2">
                The title of the Video
              </h1>

              <div>
                <p className="text-md text-gray-400">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut possimus dolorum, iure blanditiis, quia amet cumque sapiente ipsa distinctio tempora illum molestias obcaecati?</p>
              </div>
            </div>

            <div className="flex flex-col divide-y ">
              {
                Array(13).fill(0).map((item: any, index: number) => (
                  <CourseVideoItemComponent index={index} />
                ))
              }
            </div>
          </div>

        </div>
      )}

    </React.Fragment >
  )
}