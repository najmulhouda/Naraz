import React from "react";
import Head from "next/head";
import Link from "next/link";

import { baseUrl } from "@/config/appConfig";
import DashboardLayout from "@/layouts/DashboardLayout";

const BlankPage = () => {
  return (
    <DashboardLayout>
      <Head>
        <title>BlankPage | E-Commerce</title>
      </Head>

      <div className="w-full mx-auto p-4">
        {/* Breadcrumb  */}
        <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-3  mb-6">
          <h2 className="font-semibold text-title-md2 text-black dark:text-white">
            Page Name
          </h2>
          <nav>
            <ol className="flex items-center gap-2">
              <li>
                <Link href={`${baseUrl}/dashboard`}>Dashboard /</Link>
              </li>
              <li className="text-primary">Page Name</li>
            </ol>
          </nav>
        </div>
        {/* Breadcrumb  */}

        <div className="w-full"></div>
      </div>

    </DashboardLayout>
  );
};

export default BlankPage;
