import { useContext, useEffect, useState } from "react"
import { getCategoriesAdmin } from "../../../../api/admin/categorieApi"
import Button from "../../../../components/form-elements/Button"
import HelperText from "../../../../components/form-elements/HelperText"
import TextField from "../../../../components/form-elements/TextField"
import { DEFAULT_FILTER } from "../../../../constants/Constants"
import { AuthContext } from "../../../../providers/AuthProvider"
import { ICategorie } from "../../../client/categories/CategoriesContainer"
import { IQueryFilter } from "../../../client/librari/LibrariContainer"

type Props = {
  formik: any,
  handleSubmit: (data: any) => void,
  title: string
}
export default function BookFormContaienr({ formik, handleSubmit, title }: Props) {
  const { loader, setLoader } = useContext(AuthContext);
  const filter: IQueryFilter = DEFAULT_FILTER
  const [categories, setCategories] = useState([] as ICategorie[])


  const getCategoriesFn = async () => {
    try {
      if (loader) return
      setLoader(true)
      const resCategorie = await getCategoriesAdmin(filter)
      setCategories(resCategorie?.data?.data?.data)
    } catch (error) {
      console.log('error', error)
    } finally {
      setLoader(false)
    }
  }

  useEffect(() => {
    getCategoriesFn()
  }, [])

  return (
    <form className="bg-white p-6 flex flex-col space-y-2 rounded w-full sm:w-4/6 md:w-3/6 lg:w-3/6 xl:w-2/6 " onSubmit={formik.handleSubmit}>
      <div>
        <h1 className="text-2xl font-medium text-gray-900 mb-2">
          {
            title
          }
        </h1>
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
          <HelperText show={formik.touched.categoryId} message={formik.errors.categoryId} />
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
  )
}