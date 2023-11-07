import React, { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { baseUrl } from "@/config/appConfig";

import MenuItem from "@/components/Menu/MenuItem";
import MenuList from "@/lib/menuList.json";
import { RxDashboard } from "react-icons/rx";

interface SidebarProps {
  sidebarShow?: any;
  setSidebarShow?: any;
}

const DashboardSidebar = (props: SidebarProps) => {

  const { sidebarShow, setSidebarShow } = props;

  const sidebarRef = useRef<any>();
  const router = useRouter();
  const currentPath = router.asPath;

  useEffect(() => {
    let handler = (e: any) => {
      if (!sidebarRef.current.contains(e.target)) {
        setSidebarShow(false);
      }
    };
    
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <aside className={`${sidebarShow ? "translate-x-0" : "-translate-x-full"} delay-200  duration-[400ms] absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden  ease-linear bg-gray-800 lg:static lg:translate-x-0`} ref={sidebarRef}>
      {/* SIDEBAR HEADER */}
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
        <Link href={`${baseUrl}/dashboard`}>
          <img
            src={`${baseUrl}/img/logo/logo.svg`}
            className=" dark:bg-gray-800"
            alt="Logo"
          />
        </Link>
        <button className="block lg:hidden" onClick={() => setSidebarShow(!sidebarShow)}>
          <svg
            className="fill-current"
            width={20}
            height={18}
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill=""
            />
          </svg>
        </button>
      </div>
      {/* SIDEBAR HEADER */}
      <div className="no-scrollbar flex flex-col overflow-y-auto ease-linear">
        {/* Sidebar Menu */}
        <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
          {/* Menu Group */}
          <div>
            <ul className="mb-6 flex flex-col gap-1.5">
              {/* Menu Item Dashboard */}
              <li>
                <Link
                  className={`${currentPath == '/dashboard' ? 'bg-[#2E3A47]' : ''} group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium  text-white ease-in-out hover:bg-[#2E3A47] `}
                  href={`${baseUrl}/dashboard`}
                >
                  <RxDashboard className="text-[19px]" />
                  Dashboard
                </Link>
              </li>
              {/* Menu Item Dashboard */}
              {MenuList.map((item: any, index: number) => (
                <li className="text-white">
                  <MenuItem key={index} item={item} currentPath={currentPath.search(item.url)} />
                </li>
              ))}
            </ul>
          </div>
        </nav>
        {/* Sidebar Menu */}
      </div>
    </aside>
  );
};

export default DashboardSidebar;
