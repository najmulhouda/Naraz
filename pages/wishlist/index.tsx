import { baseUrl } from "@/config/appConfig";
import Layout from "@/layouts/Layout";
import { AiFillHome, AiOutlineHeart, AiOutlineRight } from "react-icons/ai";
import { BsArchiveFill } from "react-icons/bs";
import { FaAddressCard, FaRegCreditCard, FaTrash } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";

const WishList = () => {
  return (
    <Layout>
      <div>
        <div>
          <div className="container py-4 flex items-center gap-3">
            <a href="../index.html" className="text-red-600 text-base">
              <AiFillHome />
            </a>
            <span className="text-sm text-gray-400">
              <AiOutlineRight />
            </span>
            <p className="text-gray-600 font-medium">Profile</p>
          </div>
          {/* ./breadcrumb */}
          {/* wrapper */}
          <div className="container grid grid-cols-12 items-start gap-6 pt-4 pb-16">
            {/* sidebar */}
            <div className="col-span-3">
              <div className="px-4 py-3 shadow flex items-center gap-4">
                <div className="flex-shrink-0">
                  <img
                    src={`${baseUrl}/img/avatar.png`}
                    alt="profile"
                    className="rounded-full w-14 h-14 border border-gray-200 p-1 object-cover"
                  />
                </div>
                <div className="flex-grow">
                  <p className="text-gray-600">Hello,</p>
                  <h4 className="text-gray-800 font-medium">John Doe</h4>
                </div>
              </div>
              <div className="mt-6 bg-white shadow rounded p-4 divide-y divide-gray-200 space-y-4 text-gray-600">
                <div className="space-y-1 pl-8">
                  <a
                    href="#"
                    className="relative hover:text-red-600 block font-medium capitalize transition"
                  >
                    <span className="absolute -left-8 top-1 text-base">
                      <FaAddressCard />
                    </span>
                    Manage account{" "}
                  </a>
                  <a
                    href="#"
                    className="relative hover:text-red-600 block capitalize transition"
                  >
                    Profile information{" "}
                  </a>
                  <a
                    href="#"
                    className="relative hover:text-red-600 block capitalize transition"
                  >
                    Manage addresses{" "}
                  </a>
                  <a
                    href="#"
                    className="relative hover:text-red-600 block capitalize transition"
                  >
                    Change password{" "}
                  </a>
                </div>
                <div className="space-y-1 pl-8 pt-4">
                  <a
                    href="#"
                    className="relative hover:text-red-600 block font-medium capitalize transition"
                  >
                    <span className="absolute -left-8 top-1 text-base">
                      <BsArchiveFill />
                    </span>
                    My order history{" "}
                  </a>
                  <a
                    href="#"
                    className="relative hover:text-red-600 block capitalize transition"
                  >
                    My returns{" "}
                  </a>
                  <a
                    href="#"
                    className="relative hover:text-red-600 block capitalize transition"
                  >
                    My Cancellations{" "}
                  </a>
                  <a
                    href="#"
                    className="relative hover:text-red-600 block capitalize transition"
                  >
                    My reviews
                  </a>
                </div>
                <div className="space-y-1 pl-8 pt-4">
                  <a
                    href="#"
                    className="relative hover:text-red-600 block font-medium capitalize transition"
                  >
                    <span className="absolute -left-8 top-1 text-base">
                      <FaRegCreditCard />
                    </span>
                    Payment methods
                  </a>
                  <a
                    href="#"
                    className="relative hover:text-red-600 block capitalize transition"
                  >
                    voucher
                  </a>
                </div>
                <div className="space-y-1 pl-8 pt-4">
                  <a
                    href="#"
                    className="relative text-red-600 block font-medium capitalize transition"
                  >
                    <span className="absolute -left-8 top-1 text-base">
                      <AiOutlineHeart />
                    </span>
                    My wishlist
                  </a>
                </div>
                <div className="space-y-1 pl-8 pt-4">
                  <a
                    href="#"
                    className="relative hover:text-red-600 block font-medium capitalize transition"
                  >
                    <span className="absolute -left-8 top-1 text-base">
                      <MdOutlineLogout />
                    </span>
                    Logout
                  </a>
                </div>
              </div>
            </div>
            {/* ./sidebar */}
            {/* wishlist */}
            <div className="col-span-9 space-y-4">
              <div className="flex items-center justify-between border gap-6 p-4 border-gray-200 rounded">
                <div className="w-28">
                  <img
                    src={`${baseUrl}/img/product/product20.jpg`}
                    alt="product 20"
                    className="w-full"
                  />
                </div>
                <div className="w-1/3">
                  <h2 className="text-gray-800 text-xl font-medium uppercase">
                    Italian L shape
                  </h2>
                  <p className="text-gray-500 text-sm">
                    Availability:{" "}
                    <span className="text-green-600">In Stock</span>
                  </p>
                </div>
                <div className="text-red-600 text-lg font-semibold">
                  $320.00
                </div>
                <a
                  href="#"
                  className="px-6 py-2 text-center text-sm text-white bg-red-600 border border-red-600 rounded hover:bg-transparent hover:text-red-600 transition uppercase font-roboto font-medium"
                >
                  add to cart
                </a>
                <div className="text-gray-600 cursor-pointer hover:text-red-600">
                  <FaTrash />
                </div>
              </div>
              <div className="flex items-center justify-between border gap-6 p-4 border-gray-200 rounded">
                <div className="w-28">
                  <img
                    src={`${baseUrl}/img/product/product21.jpg`}
                    alt="product 21"
                    className="w-full"
                  />
                </div>
                <div className="w-1/3">
                  <h2 className="text-gray-800 text-xl font-medium uppercase">
                    Dining Table
                  </h2>
                  <p className="text-gray-500 text-sm">
                    Availability:{" "}
                    <span className="text-green-600">In Stock</span>
                  </p>
                </div>
                <div className="text-red-600 text-lg font-semibold">
                  $320.00
                </div>
                <a
                  href="#"
                  className="px-6 py-2 text-center text-sm text-white bg-red-600 border border-red-600 rounded hover:bg-transparent hover:text-red-600 transition uppercase font-roboto font-medium"
                >
                  add to cart
                </a>
                <div className="text-gray-600 cursor-pointer hover:text-red-600">
                  <FaTrash />
                </div>
              </div>
              <div className="flex items-center justify-between border gap-6 p-4 border-gray-200 rounded">
                <div className="w-28">
                  <img
                    src={`${baseUrl}/img/product/product22.jpg`}
                    alt="product 22"
                    className="w-full"
                  />
                </div>
                <div className="w-1/3">
                  <h2 className="text-gray-800 text-xl font-medium uppercase">
                    Sofa
                  </h2>
                  <p className="text-gray-500 text-sm">
                    Availability:{" "}
                    <span className="text-red-600">Out of Stock</span>
                  </p>
                </div>
                <div className="text-red-600 text-lg font-semibold">
                  $320.00
                </div>
                <a
                  href="#"
                  className="cursor-not-allowed px-6 py-2 text-center text-sm text-white bg-red-400 border border-red-400 rounded transition uppercase font-roboto font-medium"
                >
                  add to cart
                </a>
                <div className="text-gray-600 cursor-pointer hover:text-red-600">
                  <FaTrash />
                </div>
              </div>
            </div>
            {/* ./wishlist */}
          </div>
          {/* ./wrapper */}
        </div>
        <div></div>
        <div></div>
      </div>
    </Layout>
  );
};

export default WishList;
