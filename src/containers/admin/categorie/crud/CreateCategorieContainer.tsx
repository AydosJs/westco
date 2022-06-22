import * as Yup from 'yup';
import { useContext } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";
import { IBook } from "../../../client/librari/LibrariContainer";
import { useFormik } from "formik";
import LoaderContainer from "../../../loader/LoaderContainer";
import CategorieFormContaienr from './CategorieFormContaienr';
import { ICategorie } from '../../../client/categories/CategoriesContainer';
import toast from 'react-hot-toast';
import { createCategorieAdmin } from '../../../../api/admin/categorieApi';

export default function CreateCategorieContainer() {
  const formik = useFormik<ICategorie>({
    initialValues: {
      name: '',
      imgUrl: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      imgUrl: Yup.string().required('Required'),
    }),
    onSubmit: async (values: ICategorie) => {
      try {
        await createCategorieAdmin(values)
        toast.success('Categorie successfully created')
        formik.resetForm()
      } catch (error) {
        toast.error('Book creation failed')
      }
    }
  });

  return (
    <>
      <div className="flex items-center justify-center ">
        <CategorieFormContaienr title="Create Categorie" formik={formik} handleSubmit={(values: IBook) => console.log("SUBMITION ", values)} />
      </div>
    </>
  )
}