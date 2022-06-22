import { useFormik } from "formik";
import { IBook } from "../../../client/librari/LibrariContainer";
import BookFormContaienr from "./BookFormContaienr"
import * as Yup from 'yup';
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";
import { getBookitemAdmin, updateBookAdmin } from "../../../../api/admin/BookApi";
import LoaderContainer from "../../../loader/LoaderContainer";
import toast from "react-hot-toast";

type Props = {}

export default function EditBookContainer({ }: Props) {
  const { id }: any = useParams()
  const [book, setBook] = useState<IBook>(null as any)
  const { loader, setLoader, admin } = useContext(AuthContext);
  const navigate = useNavigate()
  // console.log("admin", admin)

  useEffect(() => {
    getBookFn(id)
  }, [])

  const getBookFn = async (id: string) => {
    try {
      setLoader(true)
      const response: any = await getBookitemAdmin(id)
      setBook(response?.data?.data)
      console.log('book response - ', response?.data?.data)
    } catch (e) {
      console.error(e)
    } finally {
      setLoader(false)
    }
  }

  const formik = useFormik<IBook>({
    enableReinitialize: true,
    initialValues: book || ({
      name: '',
      imgUrl: '',
      authorId: '',
      categoryId: '',
      ebookUrl: '',
      description: ''
    } as IBook),
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      imgUrl: Yup.string().required('Required'),
      ebookUrl: Yup.string().required('Required'),
    }),
    onSubmit: async (values: IBook) => {
      try {
        setLoader(true)
        const payload: IBook = {
          ...values,
          authorId: admin?._id
        }
        console.log("Edit values", payload)
        await updateBookAdmin(payload)
        toast.success('Book successfully edited')
        navigate('/admin/book-list')
      } catch (error) {
        toast.error('Book update failed')
      } finally {
        setLoader(false)
      }
    }
  });


  return (
    <>
      {loader && <LoaderContainer />}
      <div className="flex items-center justify-center ">

        <BookFormContaienr title="Edit book" formik={formik} handleSubmit={(values: IBook) => console.log("SUBMITION ", values)} />
      </div>
    </>
  )
}