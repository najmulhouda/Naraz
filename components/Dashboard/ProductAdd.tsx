import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { parseCookies, setCookie, destroyCookie } from "nookies";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import { baseUrl } from "@/config/appConfig";
import DashboardLayout from "@/layouts/DashboardLayout";
import InputText from "@/components/Inputs/InputText";
import InputNumber from "@/components/Inputs/InputNumber";
import InputTextarea from "@/components/Inputs/InputTextarea";
import { FaTrash } from "react-icons/fa";

type User = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  profile_avatar: string;
  userRole: string;
};

const ProductAdd = () => {

  const router = useRouter();
  const cookies = parseCookies();

  const [loading, setLoading] = useState(true);
  const [loadingImg, setLoadingImg] = useState(false);
  const [conLoading, setConLoading] = useState(false);
  const [user, setUser] = useState<User>();

  const [categories, setCategories] = useState([] as any);
  const [images, setImages] = useState([] as any);

  const [newProduct, setNewProduct] = useState({
    user_id: user?._id,
    title: "",
    images: [],
    category: "",
    description: "",
    price: "",
  });

  const [error, setError] = useState({
    title: "",
    images: "",
    category: "",
    price: "",
  });

  const getUser = async (id: any) => {
    const getUser = await fetch(`/api/user/${id}`);
    const result = await getUser.json();
    if (result.status == true) {
      setUser(result.user);
      setNewProduct({ ...newProduct, user_id: result.user?._id });
      setLoading(false);
    }
  };

  useEffect(() => {
    let cuser = cookies?.user;
    if (cuser) {
      let luser = JSON.parse(cuser);
      getUser(luser._id);
    } else {
      setLoading(false);
    }
  }, [cookies?.user]);

  const getCats = async () => {
    const getCats = await fetch(`${baseUrl}/api/category/get-categories`, {
      method: "GET",
    });
    const result = await getCats.json();

    if (result.status == true) {
      setCategories(result.category);
      setLoading(false);
    } else {
      setCategories([]);
      setLoading(true);
    }
  };

  useEffect(() => {
    getCats();
  }, []);


  const updateProduct = (e: { target: { name: any; value: any } }) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const ImageUpload = async (
    e: {
      target: {
        [x: string]: any;
        name: any;
        value: any;
      };
    }
  ) => {
    setLoadingImg(true);
    for (let i = 0; i < e.target.files.length; i++) {
      const file = e.target.files[i];
      const type = e.target.files[i].type;
      const size = e.target.files[i].size;

      // console.log('size', size);

      //@ts-ignore
      if (type == "image/jpg" || type == "image/jpeg" || type == "image/gif" || type == "image/png") {

        var formdata = new FormData();
        formdata.append("image", file, file.name);
        var myHeaders = new Headers();

        var requestOptions: any = {
          method: "POST",
          headers: myHeaders,
          body: formdata,
          redirect: "follow",
        };
        const upload = await fetch(`${baseUrl}/api/upload`, requestOptions);
        const result = await upload.json();

        const imagePath = '/images/' + result?.image;

        const image: any = {
          id: new Date().getTime(),
          image: imagePath,
        }

        setImages((oldImages: any): any => [...oldImages, image]);

      } else {
        toast.error('This file not uploaded')
      }
    }
    setLoadingImg(false);
  };

  const photoDel = (id: any) => {
    setImages(images.filter((item: any) => item.id !== id));
  };


  const validate = (
    values:
      {
        title: string,
        images: string,
        category: string,
        price: string,
      }
  ) => {
    let errors: any = {};

    if (!values.title) {
      errors.title = "Title is required";
    }

    if (values.images.length <= 0) {
      errors.lastName = "Images is required";
    }

    if (!values.category) {
      errors.category = "Category is required";
    }

    if (!values.price) {
      errors.price = "Category is required";
    }
    return errors;
  }

  async function SubmitHandler(e: any) {
    e.preventDefault();
    setConLoading(true);
    setLoading(true);

    const errors = validate({ ...newProduct, images: images });
    if (Object.keys(errors).length > 0) {
      setError(errors);
      setConLoading(false);
    } else {
      const addProduct = await fetch("/api/product/product_add", {
        method: "POST",
        body: JSON.stringify({
          ...newProduct,
          images: images
        }),
      });
      const result = await addProduct.json();
      console.log("result:-", result);
      if (result.status == true) {
        setLoading(false);
        toast.success(result.message);
        setNewProduct({
          ...newProduct,
          title: "",
          images: [],
          category: "",
          description: "",
          price: "",
        });
        setImages([]);

        setTimeout(() => {
          router.push("/dashboard/products");
        }, 2500);

      } else {
        toast.error(result.error);
      }

      setConLoading(false);
    }
  }


  return (
    <>
      <ToastContainer />
      <div className="w-full bg-gray-50 dark:bg-gray-900 p-2 antialiased  mb-10">
        <form onSubmit={SubmitHandler}>

          <div className="w-full grid grid-cols-1 gap-4 p-2">
            <div className="mb-4">
              <label className="block mb-4 text-sm font-semibold text-gray-900 dark:text-white">Title</label>
              <InputText
                onChange={updateProduct}
                name="title"
                value={newProduct.title}
                placeholder="Product Title"
                required={true}
                error={error.title}
              />
            </div>

            <div className="mb-4">
              <label className="block mb-4 text-sm font-semibold text-gray-900 dark:text-white">Select Category</label>
              <select
                name="category"
                onChange={updateProduct}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required={true}
              >
                <option>Select Category</option>
                {
                  categories.map((cat: any, index: number) => (
                    <option key={index} value={cat._id}>{cat.title}</option>
                  ))
                }
              </select>
              {
                error?.category?.length > 0 ? <p className="w-full mt-1 mb-1 text-red-500  text-base font-mono font-semibold antialiased">{error?.category}</p> : null
              }
            </div>

            <div className="mb-4">
              <label className="block mb-4 text-sm font-semibold text-gray-900 dark:text-white">Price</label>
              <InputNumber
                onChange={updateProduct}
                name="price"
                value={newProduct.price}
                placeholder="Product Price"
                required={true}
                error={error.price}
              />
            </div>

            <div className="mb-4">
              <label className="block mb-4 text-sm font-semibold text-gray-900 dark:text-white">Description</label>
              <InputTextarea
                onChange={updateProduct}
                name="description"
                value={newProduct.description}
                placeholder="Product description"
                required={true}
                error={error.price}
              />
            </div>


            <div className="mb-4">
              <div className="w-full flex flex-wrap gap-3 ">
                {images.map((item: any, index: any) => (
                  <div
                    key={`${item.id}.${index}`}
                    className="w-20 h-24 rounded-lg bg-gray-400"
                  >
                    {item.image == '' ? null : (
                      <>
                        <div className="w-full h-20 relative">
                          <FaTrash
                            className="w-4 h-4 mt-1 ml-14 text-red-600 z-10 absolute cursor-pointer"
                            onClick={() => photoDel(item.id)}
                          />
                          <img src={item.image} className="w-20 h-24 rounded-lg" />
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full mb-4 flex items-center justify-center mx-auto">
              <label
                htmlFor="ImageUpload"
                className="w-full flex flex-col items-center justify-center h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or drag
                    and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input id="ImageUpload" type="file" className="hidden"
                  multiple
                  onChange={(e) => ImageUpload(e)}
                />
              </label>
            </div>

            <div className="mb-4">
              <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                {conLoading ? (
                  <>
                    <div
                      role="status"
                      className="w-full flex items-center justify-center"
                    >
                      <svg
                        aria-hidden="true"
                        className="mr-2 w-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
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
                  <>Add product</>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProductAdd;
