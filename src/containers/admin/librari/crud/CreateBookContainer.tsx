import * as Yup from 'yup';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";
import { IBook } from "../../../client/librari/LibrariContainer";
import { useFormik } from "formik";
import { getAdminProfile } from "../../../../api/admin/adminApi";
import { IAdmin } from "../../profile/AdminProfileContainer";
import { createBookAdmin } from "../../../../api/admin/BookApi";
import toast from "react-hot-toast";
import LoaderContainer from "../../../loader/LoaderContainer";
import BookFormContaienr from "./BookFormContaienr";

export default function CreateBookContainer() {
  const { loader, setLoader } = useContext(AuthContext);
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
      categoryId: Yup.string().required('Required'),
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

  const getUserFn = async () => {
    try {
      if (loader) return
      setLoader(true)
      const resAdmin = await getAdminProfile()
      setAdmin(resAdmin.data.data)
    } catch (error) {
      console.log('error', error)
    } finally {
      setLoader(false)
    }
  }

  useEffect(() => {
    getUserFn()
  }, [])



  return (
    <>
      {loader && <LoaderContainer />}
      <div className="flex items-center justify-center ">

        <BookFormContaienr title="Edit book" formik={formik} handleSubmit={(values: IBook) => console.log("SUBMITION ", values)} />
      </div>
    </>
  )
}