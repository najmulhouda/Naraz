import Head from "next/head";

import FullReport from "@/components/Dashboard/FullReport";
import TotalUser from "@/components/Dashboard/TotalUser";
import TotalProfit from "@/components/Dashboard/TotallProfit";
import Traffic from "@/components/Dashboard/Traffic";
import DashboardLayout from "@/layouts/DashboardLayout";

const DashboardPage = () => {
  return (
    <DashboardLayout>
      <Head>
        <title>Dashboard | E-Commerce</title>
      </Head>
      <div className="w-full flex justify-between p-4">
        <TotalUser />
        <FullReport />
        <TotalProfit />
        <Traffic />
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
