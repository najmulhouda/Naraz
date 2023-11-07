import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { baseUrl } from "@/config/appConfig";
import { BsBasket, BsBoxSeam } from "react-icons/bs";
import { FaUsers } from "react-icons/fa6";

interface MenuProps {
  item?: any;
  currentPath?: any;
}

const MenuItem = (props: MenuProps) => {

  const { item, currentPath } = props;
  const [open, setOpen] = React.useState(false);
  console.log('currentPath', currentPath);

  return (
    <>
      <Link
        href="#"
        className={`${currentPath > 0 ? 'bg-[#2E3A47]' : ''} group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-[#DEE4EE] duration-300 ease-in-out hover:bg-[#333A48] dark:hover:bg-[#313D4A]`}
      >
        {item.icon == "BsBoxSeam" ? (
          <BsBoxSeam className="text-[19px]" />
        ) : null}
        {item.icon == "BsBasket" ? <BsBasket className="text-[19px]" /> : null}
        {item.icon == "FaUsers" ? <FaUsers className="text-[19px]" /> : null}
        {item.title}
        {item.sub.length > 0 ? (
          <svg
            className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current duration-300 ease-in-out ${open ? "rotate-180" : ""
              }`}
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setOpen(!open)}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
              fill=""
            />
          </svg>
        ) : null}
      </Link>

      {open ? (
        <div className="overflow-hidden">
          <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
            {item.sub.map((sub_item: any, index: number) => (
              <li key={index}>
                <Link
                  className="group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-[#8A99AF] duration-300 ease-in-out hover:text-white"
                  href={`${baseUrl}/dashboard/${sub_item.url}`}
                >
                  {sub_item?.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </>
  );
};

export default MenuItem;
