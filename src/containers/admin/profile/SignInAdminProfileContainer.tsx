import Button from '../../../components/form-elements/Button'
import TextField from '../../../components/form-elements/TextField'
import * as Yup from 'yup';
import { useFormik } from "formik";
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';


export interface AdminPayload {
  fullName: string,
  password: string,
  roleId?: string
}

export interface IRole {
  _id: string,
  name: string,
  isDeleted: boolean,
  genre: boolean
}

export default function SignInAdminProfileContainer() {
  const { signInAdminFn } = useContext(AuthContext);

  const formik = useFormik<AdminPayload>({
    initialValues: {
      fullName: '',
      password: '',
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required('Required'),
      password: Yup.string().required('Required'),
    }),
    onSubmit: async (values) => {
      await signInAdminFn(values)
    }
  });


  return (
    <div className='flex item-center h-full items-center justify-center'>

      <form className='p-8 border bg-white rounded flex flex-col space-y-6 w-2/6' onSubmit={formik.handleSubmit}>
        <div>
          <h1 className='text-2xl mb-2 font-normal'>Admin profile</h1>
          <p className='text-sm text-gray-600 font-normal'>By creating admin profile you would get an access to create and delete datas in this platform</p>
        </div>

        <div className='flex flex-col'>
          <TextField
            id='fullName'
            name='fullName'
            value={formik.values.fullName}
            onChange={formik.handleChange}
            label='Full name'
            placeholder='Admin' />
          <TextField id='passwords' name='password' value={formik.values.password} onChange={formik.handleChange} type='password' label='Passwords' placeholder='' />
        </div>

        <div className='pt-4'>
          <Button type='submit'>
            SUBMIT
          </Button>
        </div>
      </form >
    </div >
  )
}