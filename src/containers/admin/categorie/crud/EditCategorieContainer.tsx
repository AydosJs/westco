import { useFormik } from "formik";
import { IBook } from "../../../client/librari/LibrariContainer";
import * as Yup from 'yup';
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";
import LoaderContainer from "../../../loader/LoaderContainer";
import toast from "react-hot-toast";
import CategorieFormContaienr from "./CategorieFormContaienr";
import { getCategorieAdmin, updateCategorieAdmin } from "../../../../api/admin/categorieApi";
import { ICategorie } from "../../../client/categories/CategoriesContainer";

type Props = {}

export default function EditCategorieContainer({ }: Props) {
  const { id }: any = useParams()
  const [categorie, setCategorie] = useState<ICategorie>(null as any)
  const { loader, setLoader } = useContext(AuthContext);
  const navigate = useNavigate()

  useEffect(() => {
    getCategorie(id)
  }, [])

  const getCategorie = async (id: string) => {
    try {
      setLoader(true)
      const response: any = await getCategorieAdmin(id)
      setCategorie(response?.data?.data)
      console.log('Categorie response - ', response?.data?.data)
    } catch (e) {
      console.error(e)
    } finally {
      setLoader(false)
    }
  }

  const formik = useFormik<ICategorie>({
    enableReinitialize: true,
    initialValues: categorie || ({
      name: '',
      imgUrl: '',
    } as IBook),
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      imgUrl: Yup.string().required('Required'),
    }),
    onSubmit: async (values: ICategorie) => {
      try {
        setLoader(true)
        await updateCategorieAdmin(values)
        toast.success('Categorie successfully edited')
        navigate('/admin/categorie-list')
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

        <CategorieFormContaienr title="Edit Categorie" formik={formik} handleSubmit={(values: IBook) => console.log("SUBMITION ", values)} />
      </div>
    </>
  )
}