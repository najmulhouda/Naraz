import { FaFacebookF, FaInstagram, FaPhone, FaTwitter } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="py-10 mt-24 border-t border-separate">
        <div className="container">
          <div className="row grid grid-cols-1 md:grid-cols-3 gap-x-10">
            {/* Col 1 */}
            <div className="col  space-y-3">
              <div>
                <img src="images/logo/logo.png" alt="" className="w-24" />
              </div>
              <p>
                Discover Naraz, your go-to destination for premium products and
                exceptional shopping experiences. We are committed to bringing
                you the latest trends and highest quality items.
              </p>
              <div>
                <h2 className="text-primary font-bold text-lg pb-3">
                  NEWSLETTER
                </h2>
                <div>
                  <form
                    action=""
                    className="flex border border-separate rounded-md "
                  >
                    <input
                      type="text"
                      placeholder="Enter your email"
                      className="w-full py-2 pl-3 focus:outline-0 focus:ring-0 border-0"
                    />
                    <input
                      type="submit"
                      defaultValue="subscribe"
                      className="hover:bg-orange-500 bg-orange-400 text-white rounded-r-md px-3 py-2 cursor-pointer uppercase"
                    />
                  </form>
                </div>
              </div>
            </div>
            {/* Col 2 */}
            <div className="col grid gap-x-10 grid-cols-2">
              {/* Inner Col 1 */}
              <div className="space-y-3">
                <h2 className="text-primary font-bold text-lg pb-3">
                  MY ACCOUNT
                </h2>
                <div className="flex flex-col space-y-3">
                  <a href="#" className="hover:text-orange-500">
                    {" "}
                    Orders{" "}
                  </a>
                  <a href="#" className="hover:text-orange-500">
                    {" "}
                    Wishlist{" "}
                  </a>
                  <a href="#" className="hover:text-orange-500">
                    {" "}
                    Track Order{" "}
                  </a>
                  <a href="#" className="hover:text-orange-500">
                    {" "}
                    Manage Account{" "}
                  </a>
                  <a href="#" className="hover:text-orange-500">
                    {" "}
                    Return Order{" "}
                  </a>
                </div>
              </div>
              {/* Inner Col 2 */}
              <div className="space-y-3">
                <h2 className="text-primary font-bold text-lg pb-3 uppercase">
                  Information
                </h2>
                <div className="flex flex-col space-y-3">
                  <a href="#" className="hover:text-orange-500">
                    {" "}
                    About Us{" "}
                  </a>
                  <a href="#" className="hover:text-orange-500">
                    {" "}
                    Return Policy{" "}
                  </a>
                  <a href="#" className="hover:text-orange-500">
                    {" "}
                    Terms &amp; Condition{" "}
                  </a>
                  <a href="#" className="hover:text-orange-500">
                    {" "}
                    Privacy Policy{" "}
                  </a>
                  <a href="#" className="hover:text-orange-500">
                    {" "}
                    FAQ{" "}
                  </a>
                </div>
              </div>
            </div>
            {/* Col 3 */}
            <div className="space-y-3">
              <h2 className="text-primary font-bold text-lg pb-3 uppercase">
                contact
              </h2>
              <div className="flex flex-col space-y-3">
                <div className="flex">
                  <span>
                    <FaLocationDot className="mr-3 text-['16px']" />
                  </span>
                  <p>6795 Dhaka City, Bangladesh</p>
                </div>
                <div className="flex">
                  <span>
                    <FaPhone className="mr-3 text-['16px']" />
                  </span>
                  <p>+880 01746915574</p>
                </div>
                <div className="flex">
                  <span>
                    <GrMail className="mr-3 text-['16px'] flex " />
                  </span>
                  <p> najmulhouda6@gmail.com</p>
                </div>
              </div>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="w-8 h-8 p-2 rounded-full  flex items-center justify-center bg-orange-500"
                >
                  <FaFacebookF className="text-gray-900 text-['14px']" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 p-2 rounded-full  flex items-center justify-center bg-orange-500"
                >
                  <FaTwitter className="text-gray-900 text-['14px']" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 p-2 rounded-full  flex items-center justify-center bg-orange-500"
                >
                  <FaInstagram className="text-gray-900 text-['14px']" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-5 bg-primary text-black dark:text-white">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="text-center">
                Copyright ©2024 | All Rights Reserved By Naraz
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
