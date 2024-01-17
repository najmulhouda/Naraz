/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import { baseUrl } from "@/config/appConfig";
import Link from "next/link";
import React, { SetStateAction, useEffect, useState } from "react";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import cookie from "js-cookie";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";

type User = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  profile_avatar: string;
  userRole: string;
};

const UserProfileTop: React.FC = () => {
  const router = useRouter();
  const cookies = parseCookies();

  const [Loading, setLoading] = useState(true);
  const [open, setOpen] = useState(0);

  const [mounted, setMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [language, setLanguage] = useState("eng");
  const [user, setUser] = useState<User>();
  const handleOpen = (value: SetStateAction<number>) => {
    setOpen(open === value ? 0 : value);
  };

  const getUser = async (id: any) => {
    const getUser = await fetch(`/api/user/${id}`);
    const result = await getUser.json();
    if (result.status == true) {
      setUser(result.user);
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

  useEffect(() => {
    let cuser = cookies?.user;
    let luser;
    if (cuser) {
      luser = JSON.parse(cuser);
    } else {
      luser = "";
    }

    if (localStorage.getItem("language")) {
      const lang: any = localStorage.getItem("language");
      setLanguage(lang);
    }

    setUser(luser);
    setMounted(true);
  }, [cookies?.user]);

  // // console.log("user :- ", user);

  const logout = () => {
    cookie.remove("token");
    cookie.remove("user");
    toast.success("Successfully logged out");
    router.push("/login");
  };

  return (
    <>
      {user ? (
        <div className="mr-2 lg:mr-0 dropdown relative pr-5 sm:pr-0">
          <button
            type="button"
            className="dropdown-toggle flex items-center rounded-full text-sm focus:bg-none focus:ring-0 dark:focus:ring-0 md:mr-0"
            onClick={() => handleOpen(1)}
          >
            <img
              className="h-9 w-9 mx-6 sm:ml-0 text-white rounded-full"
              src={`${baseUrl}/img/user.png`}
              // src={user.profile_avatar}
              alt="user photo"
            />
            <span className="ml-2 hidden text-left md:block">
              <span
                className={`${
                  language == "bng" ? `bangla text-xl` : "font-sans text-base"
                }  block font-medium text-gray-100`}
              ></span>
              <span className="-mt-1 block text-lg font-medium text-gray-200">
                {user.firstName}
              </span>
            </span>
          </button>

          <div
            className={`${
              open ? `block` : `hidden`
            } dropdown-menu dropdown-menu-right z-50 mt-2 -right-2 list-none divide-y divide-gray-100 rounded border-slate-700 md:border-white text-base shadow dark:divide-gray-600 bg-white dark:bg-slate-800 absolute`}
            onMouseLeave={() => handleOpen(0)}
          >
            <div className="py-3 px-4">
              <span className="block text-sm font-medium text-gray-900 dark:text-white">
                {`${user.firstName} ${user.lastName}`}
              </span>
              <span className="block truncate text-sm font-normal text-gray-500 dark:text-gray-400">
                {user?.email}
              </span>
            </div>
            <ul className="py-1" aria-labelledby="navUserdata">
              {Loading ? (
                <></>
              ) : (
                <>
                  {user?.userRole == "admin" ? (
                    <>
                      <li>
                        <Link
                          href={`${baseUrl}/dashboard`}
                          className={`${
                            language == "bng"
                              ? `bangla text-xl`
                              : "font-sans text-sm"
                          }  block py-2 px-4 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-900/20 dark:hover:text-white`}
                        >
                          Dashboard
                        </Link>
                      </li>
                    </>
                  ) : (
                    <></>
                  )}
                </>
              )}
              <li>
                <Link
                  href={`${baseUrl}/my-profile`}
                  className={`${
                    language == "bng" ? `bangla text-xl` : "font-sans text-sm"
                  }  block py-2 px-4 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-900/20 dark:hover:text-white`}
                >
                  My Profile
                </Link>
              </li>
              <li>
                <Link
                  href={`${baseUrl}/settings`}
                  className={`${
                    language == "bng" ? `bangla text-xl` : "font-sans text-sm"
                  }  block py-2 px-4 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-900/20 dark:hover:text-white`}
                >
                  Settings
                </Link>
              </li>
              <li>
                <span
                  onClick={() => logout()}
                  className={`${
                    language == "bng" ? `bangla text-xl` : "font-sans text-sm"
                  }  block py-2 px-4 text-gray-900 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-900/20 dark:hover:text-white cursor-pointer`}
                >
                  Logout
                </span>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <Link className="mt-2" href={`${baseUrl}/login`}>
          Login/Register
        </Link>
        // <Link href={`${baseUrl}/login`}>
        //   <FaUser className="text-[24px] text-black dark:text-white " />
        //   <p className="text-black dark:text-white text-center ">Account</p>
        // </Link>
        // <div>
        //   {userInfo ? (
        //     <> {userInfo}</>
        //   ) : (
        //     <Link href={`${baseUrl}/login`}>Login/Register</Link>
        //   )}
        // </div>
      )}
    </>
  );
};

export default UserProfileTop;
