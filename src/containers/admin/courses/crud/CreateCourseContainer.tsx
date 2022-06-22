import TextField from "../../../../components/form-elements/TextField";
import * as Yup from 'yup';
import { useFormik } from "formik";
import Button from "../../../../components/form-elements/Button";
import toast from "react-hot-toast";
import HelperText from "../../../../components/form-elements/HelperText";
import { createCoursesAdmin } from "../../../../api/admin/coursesApi";
import { useNavigate } from "react-router-dom";
import { ICourse } from "../../../client/courses/CoursesContainer";

export default function CreateCourseContainer() {
  const navigate = useNavigate();

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
        // navigate('/admin/courses-list');
        formik.resetForm()
      } catch (error) {
        toast.error('Course creation failed')
      }
    }
  });


  return (
    <div className="flex h-full items-center justify-center  ">

      <form className="bg-white p-6 flex flex-col space-y-2 rounded w-full sm:w-4/6 md:w-3/6 lg:w-3/6 xl:w-2/6 " onSubmit={formik.handleSubmit}>
        <div>
          <h1 className="text-2xl font-medium text-gray-900 mb-2">Create course</h1>
        </div>

        <div className="flex flex-col">
          <div>
            <TextField
              label="Course title"
              placeholder="Javascript"
              name="name"
              id="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <HelperText show={formik.touched.name} message={formik.errors.name} />
          </div>

          <div>
            <TextField
              label="Course banner "
              placeholder="imgUrl"
              name="imgUrl"
              id="imgUrl"
              value={formik.values.imgUrl}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <HelperText show={formik.touched.imgUrl} message={formik.errors.imgUrl} />
          </div>


          <div className="mb-2">
            <label htmlFor="description" className="leading-7 text-sm font-medium text-gray-600 ">Description</label>
            <textarea
              id="description"
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              rows={4}
              className="block p-2.5 w-full text-sm border rounded "
              placeholder="About the course..." />
          </div>
        </div>

        <div>
          <Button type="submit">
            SUBMIT
          </Button>
        </div>

      </form>
    </div>
  )
}