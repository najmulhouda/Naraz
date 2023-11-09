import { setCartList } from "@/lib/reduxStore/slices/storeSlice";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import HeaderTop from "@/components/Home/HeaderTop";
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
      <header className="bg-orange-500 dark:bg-gray-600">
        <HeaderTop />
        {/* Top Header */}
        <div className="container">
          <div className="row flex items-center justify-between ">
            {/* Col 1 */}
            <div>
              <Link href="/">
                <img
                  src={`${baseUrl}/img/logo/logo.png`}
                  alt="website-logo"
                  className="w-40"
                />
              </Link>
            </div>
            {/* Col 2 */}
            <div>
              <div className="flex border border-r-0 rounded-md  ">
                <img
                  src={`${baseUrl}/img/icon/search.svg`}
                  alt="search"
                  className="pl-3 pr-4"
                />
                <form className="w-full">
                  <input
                    type="text"
                    placeholder="search"
                    className="py-2  focus:outline-0 focus:ring-0 border-0"
                  />
                  <input
                    type="submit"
                    defaultValue="Search"
                    className="bg-orange-400 text-white rounded-r-md px-3 py-2 cursor-pointer"
                  />
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
      </header>
      {/* End Header */}

      {/* Start Navbar */}
      <nav className="bg-orange-300  dark:bg-gray-700 text-white">
        <div className="container">
          <div className="row flex items-center space-x-5">
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
                  <span>All Categories</span>
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
              <div className="space-x-5 ">
                <span
                  className={
                    router.pathname == "/"
                      ? "bg-orange-600 p-4"
                      : "hover:bg-orange-500 p-4"
                  }
                >
                  <Link href={`${baseUrl}/`}>Home</Link>
                </span>
                <span
                  className={
                    router.pathname == "/shop"
                      ? "bg-orange-600 p-4"
                      : "hover:bg-orange-500 p-4"
                  }
                >
                  <Link href={`${baseUrl}/shop`}>Shop</Link>
                </span>
                <span
                  className={
                    router.pathname == "/about"
                      ? "bg-orange-600 p-4"
                      : "hover:bg-orange-500 p-4"
                  }
                >
                  <Link href={`${baseUrl}/about`}>About</Link>
                </span>
                <span
                  className={
                    router.pathname == "/contact-us"
                      ? "bg-orange-600 p-4"
                      : "hover:bg-orange-500 p-4"
                  }
                >
                  <Link href={`${baseUrl}/contact-us`}>Contact Us</Link>
                </span>
              </div>

              <div>
                {userInfo ? (
                  <> {userInfo.firstName}</>
                ) : (
                  <Link href={`${baseUrl}/login`}>Login/Register</Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
};

export default Header;
