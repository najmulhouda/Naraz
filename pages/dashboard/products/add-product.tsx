
import React from "react";
import Head from "next/head";
import Link from "next/link";

import { baseUrl } from "@/config/appConfig";
import DashboardLayout from "@/layouts/DashboardLayout";
import ProductAdd from "@/components/Dashboard/ProductAdd";

const AddProduct = () => {
  return (
    <DashboardLayout>
      <Head>
        <title>Add New Product | E-Commerce</title>
      </Head>

      <div className="w-full mx-auto p-4">
        {/* Breadcrumb  */}
        <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-3  mb-6">
          <h2 className="font-semibold text-title-md2 text-black dark:text-white">
            Add New Product
          </h2>
          <nav>
            <ol className="flex items-center gap-2">
              <li>
                <Link href={`${baseUrl}/dashboard`}>Dashboard /</Link>
              </li>
              <li className="text-primary">Add New Product</li>
            </ol>
          </nav>
        </div>
        {/* Breadcrumb  */}

        <div className="w-full">
          <ProductAdd />
        </div>
      </div>

    </DashboardLayout>
  );
};


export default AddProduct;
