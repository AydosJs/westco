import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBooks } from "../../api/librariApi";
import { AuthContext } from "../../providers/AuthProvider";
import LoaderContainer from "../loader/LoaderContainer";
import InfiniteScroll from 'react-infinite-scroll-component';
import { DEFAULT_FILTER } from "../../constants/Constants";
import LoaderCrads from "../loader/LoaderCrads";
import { getCourses } from "../../api/coursesApi";
import { IQueryFilter, PageableData } from "../librari/LibrariContainer";
import CoursesComponent from "../../components/CoursesComponent/CoursesComponent";

export interface ICourse {
  _id?: string,
  name: string,
  imgUrl: string,
  description: string
}

export default function CoursesContainer() {
  const { loader, setLoader } = useContext(AuthContext);
  const filter: IQueryFilter = DEFAULT_FILTER
  const [courses, setCourses] = useState<PageableData<ICourse>>({
    items: [],
    total: 0,
    limit: filter?.limit
  })

  const getLibrari = async () => {
    try {
      if (loader) return
      setLoader(true)
      const res = await getCourses(filter)
      setCourses({
        ...courses,
        total: res.data?.data?.total,
        items: res.data?.data?.data,
      })
    } catch (error) {
      console.log('error', error)
    } finally {
      setLoader(false)
    }
  }

  useEffect(() => {
    getLibrari()
  }, [])

  const updateCourses = async (payload: any) => {
    if (
      !courses?.items?.length ||
      loader ||
      (courses.total < payload.offset && payload.offset <= 0)
    )
      return
    try {
      console.log('update log ->', payload, loader, courses)

      const response: any = await getBooks(payload)
      const items = [
        ...courses.items,
        ...((response.data?.data?.data as ICourse[]) || []),
      ]

      setCourses({ ...courses, items: items })
    } catch (error) {
      console.error('books items is error ', error)
    } finally {
      setLoader(false)
    }
  }

  console.log('courses', courses)
  return (
    <>
      {loader && <LoaderContainer />}
      <InfiniteScroll
        // pageStart={0}
        dataLength={courses.items?.length}
        next={() => updateCourses({ ...filter, offset: courses?.items?.length })}
        scrollableTarget="scrollableDiv"
        hasMore={
          courses.total > courses?.items?.length &&
          courses?.items?.length >= courses?.limit
        }
        loader={<LoaderCrads />}

      >
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 min-h-screen ">
          {courses.total != 0 && courses.items.map((course: ICourse) => (
            <Link to={`/courses/${course?._id}`} key={course?._id}>
              <CoursesComponent course={course} />
            </Link>
          ))}

        </div>

      </InfiniteScroll>

    </>
  )
}