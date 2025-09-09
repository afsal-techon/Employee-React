import { useFormik } from "formik";
import React, { useContext } from "react";
import * as Yup from "yup";
import axios from "../services/axios";
import { toast } from "sonner";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),

  password: Yup.string()
    .min(4, "Password must be at least 4 characters")
    .required("Password is required"),
});

const Login = () => {

const { login } = useAuth()

const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,

    onSubmit: async (values) => {
      try {
        const { data } = await axios.post("/login", values);
        toast.success(data.message);
        login(data.user)
        localStorage.setItem("token",data.token);
       if(data.user.role ==='admin'){
         navigate('/admin-dashboard')
       }else{
         navigate('/employee-dashboard')
       }

        
      } catch (err) {
        console.log(err, "re");

        toast.error(err.response.data.message);
      }
    },
  });

  return (
    <div className="flex flex-col items-center h-screen justify-center bg-gradient-to-b from-teal-600 from-50% to-gray-100 to-50% sapce-y-6">
      <h2 className="font-sans text-3xl text-white mb-5">
        Employee Management System
      </h2>
      <div className="shadow-2xl p-6 w-80 bg-white">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={formik.handleSubmit} action="">
          <div className="mb-4">
            <label htmlFor="" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="w-full px-3 py-3 border "
              placeholder="Enter Email"
              id="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.errors.email && (
              <p className="text-red-500 text-sm">{formik.errors.email}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              className="border w-full px-3 py-3"
              placeholder="*****"
              id="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.errors.password && (
              <p className="text-red-500 text-sm">{formik.errors.password}</p>
            )}
          </div>

          <div className="mb-4 flex items-center justify-between">
            <label className="inline-flex items-center" htmlFor="">
              <input type="checkbox" className="form-checkbox cursor-pointer" />
              <span className="ml-2 text-gray-700">Remember me</span>
            </label>

            <a href="#" className="text-teal-600">
              Forgot Password
            </a>
          </div>

          <div className="mb-4">
            <button
              type="submit"
              className="border w-full bg-teal-600 text-white py-2 cursor-pointer hover:bg-teal-700 font-bold"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
