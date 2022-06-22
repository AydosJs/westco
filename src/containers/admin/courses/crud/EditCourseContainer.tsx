import { useFormik } from "formik";
import * as Yup from 'yup';
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";
import LoaderContainer from "../../../loader/LoaderContainer";
import { ICourse } from "../../../client/courses/CoursesContainer";
import { getCoursesItemAdmin, updateCourseAdmin } from "../../../../api/admin/coursesApi";
import CourseFormContaienr from "./CourseFormContaienr";
import toast from "react-hot-toast";

type Props = {}

export default function EditCourseContainer({ }: Props) {
  const { id }: any = useParams()
  const [course, setCourse] = useState<ICourse>(null as any)
  const { loader, setLoader, admin } = useContext(AuthContext);
  const navigate = useNavigate()

  useEffect(() => {
    getCourseItemFn(id)
  }, [])

  const getCourseItemFn = async (id: string) => {
    try {
      setLoader(true)
      const response: any = await getCoursesItemAdmin(id)
      setCourse(response?.data?.data)
      console.log('Course response - ', response?.data?.data)
    } catch (e) {
      console.error(e)
    } finally {
      setLoader(false)
    }
  }

  const formik = useFormik<ICourse>({
    enableReinitialize: true,
    initialValues: course || ({
      name: '',
      imgUrl: '',
      description: '',
    } as ICourse),
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      imgUrl: Yup.string().required('Required'),
      description: Yup.string().required('Required'),
    }),
    onSubmit: async (values: ICourse) => {
      try {
        setLoader(true)
        await updateCourseAdmin(values)
        toast.success('Course successfully edited')
        navigate('/admin/courses-list')
      } catch (error) {
        toast.error('Course update failed')
      } finally {
        setLoader(false)
      }
    }
  });


  return (
    <>
      {loader && <LoaderContainer />}
      <div className="flex items-center justify-center ">

        <CourseFormContaienr title="Edit Course" formik={formik} handleSubmit={(values: ICourse) => console.log("SUBMITION ", values)} />
      </div>
    </>
  )
}