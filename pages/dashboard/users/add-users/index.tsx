import React from "react";
import Head from 'next/head'
import { baseUrl } from "@/config/appConfig";

import DashboardLayout from "@/layouts/DashboardLayout"
import AddUser from "@/components/User/AddUser"



const DashboardPage = () => {
  return (
    <DashboardLayout>
      <Head>
        <title>Dashboard | E-Commerce</title>
      </Head>
    <AddUser/>
    </DashboardLayout>
  );
}

export default DashboardPage;