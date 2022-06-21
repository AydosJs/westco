import { useFormik } from "formik";
import { Link } from "react-router-dom"
import * as Yup from 'yup';
import Button from "../../components/form-elements/Button";
import TextField from "../../components/form-elements/TextField";
import HelperText from "../../components/form-elements/HelperText";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";

export interface AuthPayload {
  fullName?: string,
  password: string
}

export default function RegisterContainer() {
  const { register } = useContext(AuthContext);

  const formik = useFormik<AuthPayload>({
    initialValues: {
      fullName: '',
      password: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required('Required'),
      password: Yup.string().required('Required')
    }),
    onSubmit: async (values) => {
      await register(values);
    }
  });

  return (
    <section className=" flex justify-center items-center min-h-screen p-4">

      <form className="w-full sm:w-4/6 lg:w-1/3 px-6 bg-white flex flex-col space-y-6 max-w-xl" onSubmit={formik.handleSubmit}>

        <div>
          <h2 className="text-gray-900 text-4xl mb-1 font-medium title-font">Register</h2>
          <p className="leading-relaxed text-gray-600 font-medium">If you have already registered:&nbsp;
            <Link to="/sign-in" className="hover:underline text-blue-500 font-medium">
              Sign-in
            </Link>
          </p>
        </div>

        <div >
          <div>
            <TextField
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Full name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.fullName}
            />
            <HelperText show={formik.touched.fullName} message={formik.errors.fullName} />
          </div>

          <div>
            <TextField
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            <HelperText show={formik.touched.password} message={formik.errors.password} />
          </div>
        </div>

        <div className="w-full">
          <Button type="submit" >
            Register
          </Button>
        </div>

      </form>

    </section>
  )
}