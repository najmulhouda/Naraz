import { baseUrl } from "@/config/appConfig";
import { setCartList } from "@/lib/reduxStore/slices/storeSlice";
import { Navbar } from "flowbite-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import UserProfileTop from "@/components/User/UserProfileTop";
import { parseCookies } from "nookies";
import { BsFillSunFill, BsMoonStarsFill } from "react-icons/bs";
import { FaCartPlus, FaRegHeart } from "react-icons/fa";

type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  profile_avatar: string;
  userRole: string;
};
const Header1 = () => {
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
    <div>
      <Navbar fluid className="container bg-orange-500">
        <div className="flex">
          <Navbar.Brand href="/">
            <img
              src={`${baseUrl}/img/logo/logo.png`}
              className="md:w-48 md:h-22      h-18 sm:h-18"
              alt="Naraz logo"
            />
          </Navbar.Brand>
          <div className="md:mt-6 mt-3 h-14 sm:h-18 pr-5 sm:pr-5">
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
        <div className="flex space-x-3 pl-7 sm:pl-0">
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
        </div>
        <div className="flex justify-between gap-4 md:order-2 text-base font-medium pr-3  ">
          <UserProfileTop text-lg />
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse className="text-base font-medium">
          <Navbar>
            <span
              className={
                router.pathname == "/"
                  ? "bg-orange-600 p-2 rounded-md"
                  : "hover:bg-orange-600 p-2 rounded-md"
              }
            >
              <Link href={`${baseUrl}/`}>Home</Link>
            </span>
          </Navbar>
          <Navbar>
            <span
              className={
                router.pathname == "/"
                  ? "bg-orange-600 p-2 rounded-md"
                  : "hover:bg-orange-600 p-2 rounded-md"
              }
            >
              <Link href={`${baseUrl}/shop`}>Shop</Link>
            </span>
          </Navbar>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header1;
