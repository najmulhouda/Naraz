import Head from "next/head";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";
import { ReactNode, useEffect, useState } from "react";

import { baseUrl } from "@/config/appConfig";
import DashboardHeader from "@/layouts/DashboardHeader";
import DashboardSidebar from "@/layouts/DashboardSidebar";

type Props = {
  children?: ReactNode;
  title?: string;
};

const DashboardLayout = ({ children, title }: Props): JSX.Element => {
  const router = useRouter();
  const cookies = parseCookies();

  const [loading, setLoading] = useState(false);
  const [sidebarShow, setSidebarShow] = useState(true);

  useEffect(() => {
    document.body.classList.add("text-[#AEB7C0]");
    document.body.classList.add("bg-[#1A222C]");
  });

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="shortcut icon"
          href={`${baseUrl}/img/favicon.png`}
          type="image/x-icon"
        />
      </Head>

      {loading ? (
        <div className="fixed left-0 top-0 z-999999 flex h-screen w-screen items-center justify-center bg-white ">
          <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"></div>
        </div>
      ) : (
        <div className="flex h-screen overflow-hidden">
          <DashboardSidebar sidebarShow={sidebarShow} setSidebarShow={setSidebarShow} />
          <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
            <DashboardHeader sidebarShow={sidebarShow} setSidebarShow={setSidebarShow} />
            <main className="w-full h-screen bg-gray-50 dark:bg-gray-900">{children}</main>
          </div>
        </div>
      )}
    </>
  );
};

export default DashboardLayout;
