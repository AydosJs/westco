import Button from "../../../../components/form-elements/Button"
import HelperText from "../../../../components/form-elements/HelperText"
import TextField from "../../../../components/form-elements/TextField"

type Props = {
  formik: any,
  handleSubmit: (data: any) => void,
  title: string
}
export default function BookFormContaienr({ formik, handleSubmit, title }: Props) {
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