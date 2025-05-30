import * as Yup from "yup";
import { notify } from "../Utilits/ToastConfig";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { FaEnvelope, FaLock } from "react-icons/fa";

const Signin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const SigninSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password too short")
      .required("Password is required"),
  });

  async function sendDataToSignIn(values: { email: string; password: string }) {
    setIsLoading(true);
    try {
      const { data } = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/signin",
        values
      );

      if (data?.status === "success") {
        notify.success("Signin successful! Redirecting to home...");
        navigate("/"); // Navigate to home page after successful signin
      } else {
        notify.error(data?.message || "Signin failed");
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
      email: "",
      password: "",
    },
    validationSchema: SigninSchema,
    onSubmit: sendDataToSignIn,
  });

  return (
    <>
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8 mt-10">
        <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">
          Sign In
        </h2>
        <form className="space-y-5" onSubmit={formik.handleSubmit}>
          {/* Email field */}
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

          {/* Password field */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="font-medium text-gray-700" htmlFor="password">
                Password
              </label>
              <Link
                to="/forgot-password"
                className="text-sm text-blue-600 hover:text-blue-700 mt-1"
              >
                Forgot Password?
              </Link>
            </div>
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

          {/* Submit button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition-colors duration-200"
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        {/* Register link */}
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Register Now
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signin;
