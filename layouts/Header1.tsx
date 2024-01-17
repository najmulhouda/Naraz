import UserProfileTop from "@/components/User/UserProfileTop";
import { baseUrl } from "@/config/appConfig";
import { setCartList } from "@/lib/reduxStore/slices/storeSlice";
import { Navbar } from "flowbite-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";
import { useEffect, useState } from "react";
import { BsFillSunFill, BsMoonStarsFill } from "react-icons/bs";
import { FaCartPlus, FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

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
    <div className=" bg-orange-500  dark:bg-gray-800">
      <Navbar fluid className="container  bg-orange-500">
        <div className="flex justify-between lg:w-3/4  sm:w-3/4  md:w-3/5  sm:pl-0 pl-2">
          <Navbar.Brand href="/">
            <img
              src={`${baseUrl}/img/logo/logo1.png`}
              className="md:w-48 md:h-22   pr-2 sm:pr-2   h-18 sm:h-18"
              alt="Naraz logo"
            />
          </Navbar.Brand>
          <div className="md:mt-5 mt-3 h-14 sm:h-18 sm:w-full ">
            <form className="">
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
        <div className="flex space-x-3 pl-3 sm:pl-0  ">
          <div className="relative flex flex-col items-center cursor-pointer">
            <Link href={`${baseUrl}/wishlist`}>
              <FaRegHeart className="text-[24px] text-white dark:text-white" />
              <span className="bg-orange-400 h-5 w-5 flex items-center justify-center rounded-full absolute -top-2 left-4">
                {cartCount}
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
          <div className="relative flex flex-col items-center cursor-pointer">
            <UserProfileTop />
          </div>
        </div>
        <div className="flex justify-between  md:order-2 border-2 rounded-lg sm:border-2 md:border-none border-white font-medium mr-6  ml-13">
          <Navbar.Toggle className="break-normal border-white" />
        </div>

        <div className="">
          <Navbar.Collapse className="w-full px-2 md:px-0">
            <span
              className={
                router.pathname == "/"
                  ? " border-b-2 text-white pb-2"
                  : "hover:border-b-2 pb-2"
              }
            >
              <Link href={`${baseUrl}/`}>Home</Link>
            </span>
            <span
              className={
                router.pathname == "/shop"
                  ? " border-b-2 text-white pb-2"
                  : "hover:border-b-2 pb-2"
              }
            >
              <Link href={`${baseUrl}/shop`}>Shop</Link>
            </span>
            {/* <span
              className={
                router.pathname == "/boys' Fashion"
                  ? " border-b-2 text-white pb-2"
                  : "hover:border-b-2 pb-2"
              }
            >
              <Link href={`${baseUrl}/boys`}>Men's & Boys' Fashion</Link>
            </span> */}
            <span
              className={
                router.pathname == "/girls"
                  ? " border-b-2 text-white pb-2"
                  : "hover:border-b-2 pb-2"
              }
            >
              <Link href={`${baseUrl}/girls`}>Women's & Girls' Fashion</Link>
            </span>
            <span
              className={
                router.pathname == "/boys"
                  ? " border-b-2 text-white pb-2"
                  : "hover:border-b-2 pb-2"
              }
            >
              <Link href={`${baseUrl}/boys`}>Men's & Boys' Fashion</Link>
            </span>
            <span
              className={
                router.pathname == "/electronics"
                  ? " border-b-2 text-white pb-2"
                  : "hover:border-b-2 pb-2"
              }
            >
              <Link href={`${baseUrl}/electronics`}> Electronics Devices</Link>
            </span>
            <span
              className={
                router.pathname == "/shop"
                  ? " border-b-2 text-white pb-2"
                  : "hover:border-b-2 pb-2"
              }
            >
              <Link href={`${baseUrl}/shop`}> Sports & Outdoors</Link>
            </span>
            <span
              className={
                router.pathname == "/shop"
                  ? " border-b-2 text-white pb-2"
                  : "hover:border-b-2 pb-2"
              }
            >
              <Link href={`${baseUrl}/shop`}>Mother & Baby</Link>
            </span>
            <span
              className={
                router.pathname == "/shop"
                  ? " border-b-2 text-white pb-2"
                  : "hover:border-b-2 pb-2"
              }
            >
              <Link href={`${baseUrl}/shop`}> Groceries</Link>
            </span>

            <div className="relative group">
              <div className="">
                <Link href="#" className="flex items-center">
                  <span></span>
                  <span>More-Category</span>
                </Link>
              </div>
              {/* Dropdown Menu */}
              <div className="text-primary absolute bg-white w-full shadow-md divide-y divide-dashed divide-separatorColor opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-500 z-10">
                <Link href="#" className="flex items-center space-x-2  p-2.5">
                  <span>Health & Beauty</span>
                </Link>
                <Link href="#" className="flex items-center space-x-2  p-2.5">
                  <span>Phone Accessories</span>
                </Link>
                <Link href="#" className="flex items-center space-x-2  p-2.5">
                  <span>Fan Collection</span>
                </Link>
                <Link href="#" className="flex items-center space-x-2  p-2.5">
                  <span>Bluetooth Speakers</span>
                </Link>
                <Link href="#" className="flex items-center space-x-2  p-2.5">
                  <span> Home & Lifestyle</span>
                </Link>
              </div>
            </div>
          </Navbar.Collapse>
        </div>
      </Navbar>
      {/* extra navber */}
    </div>
  );
};

export default Header1;
