import React from 'react'
// import '../App.css';
import { useFormik,Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { baseURL } from '../apis/baseurl';
import { Toast } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      remember: false,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      password: Yup.string()
        .min(8, 'Must be 8 characters or more')
        .required('Required'),
    }),
    onSubmit: async (values) => {
      try {
        console.log(values);
        if(values && values.email =='admin@gmail.com' && values.password =='admin123456789')
        {
          alert("Login Success")
          navigate('/home')
        
        }
        else{
         
          alert('Invalid email or password')
        }
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <>
   
    
    <h1 className="outline-none mt-3 block w-full text-center text-5xl text-white font-bold">Welcome to Metaverse </h1>
   <section>
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" class="flex items-center mb-6 text-2xl font-bold text-white">
          <img class="w-10 h-10 mr-2 " src="./logo-meta.webp" alt="logo"/>
         Metaverse Admin Pannel  
      </a>
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Login in to your account
              </h1>
              <form class="space-y-4 md:space-y-6" onSubmit={formik.handleSubmit}>
              <div>
                <label htmlFor="email" className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="name@company.com"
                  className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-xl rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${formik.touched.email && formik.errors.email ? 'border-red-500' : ''}`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  required
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="text-red-500">{formik.errors.email}</div>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="**********"
                  className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-xl rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${formik.touched.password && formik.errors.password ? 'border-red-500' : ''}`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  required
                />
                {formik.touched.password && formik.errors.password && (
                  <div className="text-red-500">{formik.errors.password}</div>
                )}
              </div>
                 
                  
                  <button type="submit" class="w-full bg-blue-600 hover:bg-primary-700 text-white bold focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Login</button>
                  <p class="text-sm font-light text-primary dark:text-gray-400">
                     Contact Admin for more details 
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
   </>
  )
}

export default Login