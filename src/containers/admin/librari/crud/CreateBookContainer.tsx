import TextField from "../../../../components/form-elements/TextField";
import * as Yup from 'yup';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";
import { IBook, IQueryFilter } from "../../../client/librari/LibrariContainer";
import { useFormik } from "formik";
import Button from "../../../../components/form-elements/Button";
import { DEFAULT_FILTER } from "../../../../constants/Constants";
import { ICategorie } from "../../../client/categories/CategoriesContainer";
import { getCategoriesAdmin } from "../../../../api/admin/categorieApi";
import { getAdminProfile } from "../../../../api/admin/adminApi";
import { IAdmin } from "../../profile/AdminProfileContainer";
import { createBookAdmin } from "../../../../api/admin/BookApi";
import toast from "react-hot-toast";
import HelperText from "../../../../components/form-elements/HelperText";

export default function CreateBookContainer() {
  const { loader, setLoader } = useContext(AuthContext);
  const filter: IQueryFilter = DEFAULT_FILTER
  const [categories, setCategories] = useState([] as ICategorie[])
  const [admin, setAdmin] = useState({} as IAdmin)

  const formik = useFormik<IBook>({
    initialValues: {
      name: '',
      imgUrl: '',
      authorId: '',
      categoryId: '',
      ebookUrl: '',
      description: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      imgUrl: Yup.string().required('Required'),
      ebookUrl: Yup.string().required('Required'),
    }),
    onSubmit: async (values: IBook) => {
      try {
        const payload: IBook = {
          ...values,
          authorId: admin?._id
        }
        console.log("payload", payload)
        await createBookAdmin(payload)
        toast.success('Book successfully created')
        formik.resetForm()
      } catch (error) {
        toast.error('Book creation failed')
      }
    }
  });

  const getCategoriesAndUserFn = async () => {
    try {
      if (loader) return
      setLoader(true)
      const resCategorie = await getCategoriesAdmin(filter)
      const resAdmin = await getAdminProfile()
      setAdmin(resAdmin.data.data)
      setCategories(resCategorie?.data?.data?.data)
      console.log('ADMIN categories', resCategorie, resAdmin);
    } catch (error) {
      console.log('error', error)
    } finally {
      setLoader(false)
    }
  }

  useEffect(() => {
    getCategoriesAndUserFn()
  }, [])



  return (
    <div className="flex items-center justify-center ">

      {/* {loader && <LoaderContainer />} */}

      <form className="bg-white p-6 flex flex-col space-y-2 rounded w-full sm:w-4/6 md:w-3/6 lg:w-3/6 xl:w-2/6 " onSubmit={formik.handleSubmit}>
        <div>
          <h1 className="text-2xl font-medium text-gray-900 mb-2">Create book</h1>
        </div>

        <div className="flex flex-col">
          <div>
            <TextField
              placeholder="Book"
              name="name"
              id="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              label="Book title"
            />
            <HelperText show={formik.touched.name} message={formik.errors.name} />
          </div>


          <div>
            <TextField
              placeholder="imgUrl"
              name="imgUrl"
              id="imgUrl"
              value={formik.values.imgUrl}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              label="Image"
            />
            <HelperText show={formik.touched.imgUrl} message={formik.errors.imgUrl} />
          </div>

          <div className="mb-2">
            <label htmlFor="countries" className="block mb-2 text-sm font-medium  dark:text-gray-600">Select categorie</label>
            <select
              id="categoryId"
              name="categoryId"
              onChange={formik.handleChange}
              className="w-full bg-white rounded border outline-none text-gray-700 border-gray-300 text-sm block p-2.5 cursor-pointer ">
              {(categories?.length !== 0 && !loader) ? categories.map((item: ICategorie) => (
                <option key={item?._id} value={item?._id}>{item?.name}</option>
              )) : <option disabled selected>Loadinggg....</option>}
            </select>
          </div>

          <div>
            <TextField
              placeholder="ebookUrl"
              name="ebookUrl"
              id="ebookUrl"
              value={formik.values.ebookUrl}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              label="EBook Url"
            />
            <HelperText show={formik.touched.ebookUrl} message={formik.errors.ebookUrl} />
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
              placeholder="Description..." />
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