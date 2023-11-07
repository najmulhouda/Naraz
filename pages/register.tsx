import React, { FormEvent, useState } from "react";
import Head from 'next/head'
import Link from "next/link";



import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { baseUrl } from "@/config/appConfig";
import Layout from "@/layouts/Layout"
import InputText from "@/components/Inputs/InputText";
import InputEmail from "@/components/Inputs/InputEmail";
import InputPass from "@/components/Inputs/InputPass";


const RegisterPage = () => {

  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const [error, setError] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const updateUser = (e: { target: { name: any; value: any } }) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  }

  const validate = (
    values:
      {
        firstName: string,
        lastName: string,
        email: string,
        password: string,
        confirm_password: string
      }
  ) => {
    let errors: any = {};

    if (!values.firstName) {
      errors.firstName = "First name is required";
    }

    if (!values.lastName) {
      errors.lastName = "Last name is required";
    }

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 3) {
      errors.password = "Password must be at least 3 characters";
    }

    if (!values.confirm_password) {
      errors.confirm_password = "Confirm password is required";
    } else if (values.password !== values.confirm_password) {
      errors.confirm_password = "Passwords do not match";
    }

    return errors;
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log('userData', userData);
    setLoading(true);

    const errors = validate(userData);
    if (Object.keys(errors).length > 0) {
      setError(errors);
      setLoading(false);
    } else {
      try {
        const register = await fetch(`${baseUrl}/api/user/register`, {
          method: "POST",
          body: JSON.stringify({
            ...userData,
          }),
        });
        const result = await register.json();

        if(result.status == true){
          toast.success(result.message);
        }else{
          toast.error(result.message);
        }

        console.log('user register', result)

      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false);
      }
    }
  }

  return (
    <Layout>
      <main className="p-5">
        <form method="post" className="w-[400px] mx-auto p-6 my-16" onSubmit={handleSubmit}>
          <h2 className="text-2xl font-semibold text-center mb-4">Create an account</h2>
          <p className="text-center text-gray-500 mb-3">
            or
            <Link
              href={`${baseUrl}/login`} className="text-sm text-purple-700 hover:text-purple-600">login with existing account</Link>
          </p>
          <div className="mb-4">
            <InputText
              onChange={updateUser}
              name="firstName"
              value={userData.firstName}
              placeholder="Your First Name"
              required={true} 
              error={error.firstName}
            />
          </div>
          <div className="mb-4">
            <InputText
              onChange={updateUser}
              name="lastName"
              value={userData.lastName}
              placeholder="Your Last Name"
              required={true} 
              error={error.lastName}
            />
          </div>
          <p />
          <div className="mb-4">
            <InputEmail
              onChange={updateUser}
              name="email"
              value={userData.email}
              placeholder="Your Email"
              required={true} 
              error={error.email}
            />
          </div>
          <div className="mb-4">
            <InputPass
              onChange={updateUser}
              name="password"
              value={userData.password}
              placeholder="Password"
              required={true} 
              error={error.password}
            />
          </div>
          <div className="mb-4">
            <InputPass 
            onChange={updateUser} 
            name="confirm_password" 
            value={userData.confirm_password} 
            placeholder="Confirm Password" 
            required={true} 
            error={error.confirm_password} 
            />
          </div>

          <button className={`w-full block bg-gray-800 dark:bg-gray-600 hover:bg-gray-700 active:bg-gray-600 focus-visible:ring ring-gray-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3 ${loading ? "cursor-not-allowed" : "cursor-pointer"}`}>
            {loading ? (
              <>
                <div
                  role="status"
                  className="w-full flex items-center justify-center"
                >
                  <svg
                    aria-hidden="true"
                    className="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              </>
            ) : (
              <>Register</>
            )}
          </button>
        </form>
      </main>
    </Layout>
  );
};

export default RegisterPage;