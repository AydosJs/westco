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
export default function CategorieFormContaienr({ formik, handleSubmit, title }: Props) {
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
            label="Categorie title"
            placeholder="Categorie"
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
            label="Categorie Image"
            placeholder="imgUrl"
            name="imgUrl"
            id="imgUrl"
            value={formik.values.imgUrl}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <HelperText show={formik.touched.imgUrl} message={formik.errors.imgUrl} />
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