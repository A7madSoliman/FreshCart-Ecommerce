import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { notify } from "../Utilits/ToastConfig";

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const RegisterSchema = Yup.object({
    name: Yup.string().min(2, "Too Short!").required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string()
      .matches(/^01[0125][0-9]{8}$/, "Invalid Egyptian phone number")
      .required("Phone number is required"),
    password: Yup.string()
      .min(6, "Password too short")
      .required("Password is required"),
    rePassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Please confirm your password"),
  });

  async function sendDataToRegister(values: {
    name: string;
    email: string;
    password: string;
    rePassword: string;
    phone: string;
  }) {
    setIsLoading(true);
    try {
      const { data } = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/signup",
        values
      );

      if (data?.status === "success") {
        notify.success("Registration successful! Redirecting to login...");
        navigate("/login");
      } else {
        notify.error(data?.message || "Registration failed");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        notify.error(
          error.response?.data?.message ||
            "An error occurred during registration"
        );
      } else {
        notify.error("An unexpected error occurred");
      }
    } finally {
      setIsLoading(false);
    }
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },

    validationSchema: RegisterSchema,
    onSubmit: sendDataToRegister,
  });

  return (
    <>
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8 mt-10">
        <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">
          Create Account
        </h2>
        <form className="space-y-5" onSubmit={formik.handleSubmit}>
          {/* Username */}
          <div>
            <label
              className="block mb-1 font-medium text-gray-700"
              htmlFor="name"
            >
              Username
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-500">
                <FaUser />
              </span>
              <input
                type="text"
                name="name"
                id="name"
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Username"
                onChange={formik.handleChange}
                value={formik.values.name}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.name && formik.errors.name && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.name}
              </div>
            )}
          </div>
          {/* Email */}
          <div>
            <label
              className="block mb-1 font-medium text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-500">
                <FaEnvelope />
              </span>
              <input
                type="email"
                name="email"
                id="email"
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@email.com"
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.email}
              </div>
            )}
          </div>
          {/* Phone */}
          <div>
            <label
              className="block mb-1 font-medium text-gray-700"
              htmlFor="phone"
            >
              Phone Number
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-500">
                <FaPhone />
              </span>
              <input
                type="tel"
                name="phone"
                id="phone"
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="01xxxxxxxxx"
                onChange={formik.handleChange}
                value={formik.values.phone}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.phone && formik.errors.phone && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.phone}
              </div>
            )}
          </div>
          {/* Password */}
          <div>
            <label
              className="block mb-1 font-medium text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-500">
                <FaLock />
              </span>
              <input
                type="password"
                name="password"
                id="password"
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Password"
                onChange={formik.handleChange}
                value={formik.values.password}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.password && formik.errors.password && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.password}
              </div>
            )}
          </div>
          {/* Re-password */}
          <div>
            <label
              className="block mb-1 font-medium text-gray-700"
              htmlFor="rePassword"
            >
              Confirm Password
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-500">
                <FaLock />
              </span>
              <input
                type="password"
                name="rePassword"
                id="rePassword"
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Re-enter Password"
                onChange={formik.handleChange}
                value={formik.values.rePassword}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.rePassword && formik.errors.rePassword && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.rePassword}
              </div>
            )}
          </div>
          {/* Submit */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition-colors duration-200"
          >
            {isLoading ? "Registering..." : "Create Account"}
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
