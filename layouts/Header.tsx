import { setCartList } from "@/lib/reduxStore/slices/storeSlice";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import UserProfileTop from "@/components/User/UserProfileTop";
import { baseUrl } from "@/config/appConfig";
import { parseCookies } from "nookies";
import { BsFillSunFill, BsMoonStarsFill } from "react-icons/bs";
import {
  FaBars,
  FaBed,
  FaCartPlus,
  FaRegHeart,
  FaUtensils,
} from "react-icons/fa";
import { FaMattressPillow } from "react-icons/fa6";

type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  profile_avatar: string;
  userRole: string;
};

const Header = () => {
  const cookies = parseCookies();
  const user = cookies?.user;
  const token = cookies?.token;

  const dispatch = useDispatch();
  const cartCount = useSelector((state: any) => state.utils.cartList.count);

  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [Loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState<User>();

  const router = useRouter();
  const getUser = async (id: any) => {
    const getUser = await fetch(`/api/user/${id}`);
    const result = await getUser.json();
    if (result.status == true) {
      setUserInfo(result.user);
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
    setMounted(true);
    dispatch(setCartList());
  }, []);

  console.log("user info", userInfo);

  const renderThemeMode = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <button className="w-8 h-8 focus:outline-none flex items-center">
          <BsFillSunFill
            className="ml-1 w-6 h-6 text-gray-700  dark:text-white"
            role="button"
            onClick={() => setTheme("light")}
          />
        </button>
      );
    } else {
      return (
        <button className="w-8 h-8 focus:outline-none flex items-center">
          <BsMoonStarsFill
            className="ml-1 w-6 h-6 text-gray-700 dark:text-white"
            role="button"
            onClick={() => setTheme("dark")}
          />
        </button>
      );
    }
  };
  return (
    <>
      {/* Start Header */}
      <header className="bg-orange-500 dark:bg-gray-600 ">
        {/* Top Header */}
        <div className=" ">
          <div className="border-b ">
            <div className="lg:container row flex  items-center justify-between">
              {/* Col 1 */}
              <div>
                <Link href="/">
                  <img
                    src={`${baseUrl}/img/logo/logo.png`}
                    alt="website-logo"
                    className="md:w-48 md:h-22   "
                  />
                </Link>
              </div>
              {/* Col 2 */}
              <div className="col w-full col-span-2 flex  pr-3">
                <div className="flex border border-r-0 rounded-md w-full border-none ">
                  <form className="w-full">
                    <label
                      htmlFor="default-search"
                      className="mb-2 text-sm font-medium  text-gray-900 sr-only dark:text-white"
                    >
                      Search
                    </label>
                    <div className="relative">
                      <input
                        type="search"
                        id="default-search"
                        className="block w-full p-3  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search here"
                        required
                      />
                      <button
                        type="submit"
                        className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 md:rounded-e-lg  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        <svg
                          className="w-4 h-4"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 20"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                          />
                        </svg>
                        <span className="sr-only">Search</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              {/* Col 3*/}
              <div className="flex space-x-3">
                <div className="relative flex flex-col items-center cursor-pointer">
                  <Link href={`${baseUrl}/wishlist`}>
                    <FaRegHeart className="text-[24px] text-white dark:text-white" />
                    <span className="bg-orange-400 h-5 w-5 flex items-center justify-center rounded-full absolute -top-2 left-4">
                      8
                    </span>
                    <p className="text-white dark:text-white">WishList</p>
                  </Link>
                </div>
                <div className="relative flex flex-col items-center cursor-pointer">
                  <Link href={`${baseUrl}/cart`}>
                    <FaCartPlus className="text-[24px] text-white dark:text-white" />
                    <span className="bg-orange-400 h-5 w-5 flex items-center justify-center rounded-full absolute -top-2 left-4">
                      {cartCount}
                    </span>
                    <p className="text-white dark:text-white">Cart</p>
                  </Link>
                </div>
                <div className="relative flex flex-col items-center cursor-pointer">
                  {renderThemeMode()}
                </div>
                <div className=" flex flex-col items-center cursor-pointer">
                  {/* {
                  userInfo == null ?
                    <Link href={`${baseUrl}/login`}>
                      <FaUser className="text-[24px] text-black dark:text-white" />
                      <p className="text-black dark:text-white">Account</p>
                    </Link> :
                    <Link href={`${baseUrl}/my-account`}>
                      <FaUser className="text-[24px] text-black dark:text-white" />
                      <p className="text-black dark:text-white">Account</p>
                    </Link>
                } */}

                  <UserProfileTop />
                </div>
              </div>
            </div>
          </div>
          <nav className=" dark:bg-gray-600 text-white">
            <div className="lg:container">
              <div className="row flex items-center md:space-x-5 space-x-1">
                {/* Col 1 */}
                <div className="relative group">
                  <div className="bg-orange-500 ">
                    <Link
                      href="#"
                      className="flex items-center space-x-2 px-5 py-3"
                    >
                      <span>
                        <i className="fa-solid fa-bars text-white" />
                        <FaBars className="text-white " />
                      </span>
                      <span>Categories</span>
                    </Link>
                  </div>
                  {/* Dropdown Menu */}
                  <div className="text-primary text-black dark:bg-orange-400 absolute w-full shadow-md divide-y divide-dashed divide-separatorColor opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-500">
                    <Link
                      href="#"
                      className="flex items-center space-x-2 px-5 py-3"
                    >
                      <span>
                        <FaBed className="text-accentOne" />
                      </span>
                      <span>Bedroom</span>
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center space-x-2 px-5 py-3"
                    >
                      <span>
                        <FaMattressPillow className="text-accentOne" />
                      </span>
                      <span>Mattress</span>
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center space-x-2 px-5 py-3"
                    >
                      <span>
                        <FaUtensils className="text-accentOne" />
                      </span>
                      <span>Dinning</span>
                    </Link>
                  </div>
                </div>
                {/* Col 2 */}
                <div className="flex justify-between flex-grow">
                  <div className="md:space-x-5 space-x-1">
                    <span
                      className={
                        router.pathname == "/"
                          ? "bg-orange-600 p-2 rounded-md"
                          : "hover:bg-orange-600 p-2 rounded-md"
                      }
                    >
                      <Link href={`${baseUrl}/`}>Home</Link>
                    </span>
                    <span
                      className={
                        router.pathname == "/shop"
                          ? "bg-orange-600 p-2 rounded-md"
                          : "hover:bg-orange-600 p-2 rounded-md"
                      }
                    >
                      <Link href={`${baseUrl}/shop`}>Shop</Link>
                    </span>
                    {/* <span
                      className={
                        router.pathname == "/about"
                          ? "bg-orange-600 p-2 rounded-md"
                          : "hover:bg-orange-600 p-2 rounded-md"
                      }
                    >
                      <Link href={`${baseUrl}/about`}>About</Link>
                    </span> */}
                    {/* <span
                      className={
                        router.pathname == "/contact-us"
                          ? "bg-orange-600 p-4"
                          : "hover:bg-orange-500 p-4"
                      }
                    >
                      <Link href={`${baseUrl}/contact-us`}>Contact</Link>
                    </span> */}
                  </div>

                  {/* <div>
                {userInfo ? (
                  <> {userInfo.firstName}</>
                ) : (
                  <Link href={`${baseUrl}/login`}>Login/Register</Link>
                )}
              </div> */}
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
      {/* End Header */}

      {/* Start Navbar */}

      {/* End Navbar */}
    </>
  );
};

export default Header;
