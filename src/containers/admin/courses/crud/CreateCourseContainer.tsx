import * as Yup from 'yup';
import { useFormik } from "formik";
import toast from "react-hot-toast";
import { createCoursesAdmin } from "../../../../api/admin/coursesApi";
import { ICourse } from "../../../client/courses/CoursesContainer";
import CategorieFormContaienr from "../../categorie/crud/CategorieFormContaienr";

export default function CreateCourseContainer() {

  const formik = useFormik<ICourse>({
    initialValues: {
      name: '',
      description: '',
      imgUrl: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      imgUrl: Yup.string().required('Required'),
    }),
    onSubmit: async (values: ICourse) => {
      console.log('Course', values)
      try {
        await createCoursesAdmin(values)
        toast.success('Course successfully created')
        formik.resetForm()
      } catch (error) {
        toast.error('Course creation failed')
      }
    }
  });


  return (
    <div className="flex h-full items-center justify-center  ">

      <CategorieFormContaienr title="Create Categorie" formik={formik} handleSubmit={(values: ICourse) => console.log("SUBMITION ", values)} />
    </div>
  )
}