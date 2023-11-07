import React from "react";
import { baseUrl } from '@/config/appConfig';
import Layout from "@/layouts/Layout";


const orderDetails = () => {
  return (
    <Layout>
      <main className="p-5">
        <div className="container lg:w-2/3 xl:w-2/3 mx-auto">
          <h1 className="text-3xl font-bold mb-6">Order #1234 Details</h1>
          <div className="bg-white p-3 rounded-md shadow-md">
            <div>
              <table className="table-sm">
                <tbody>
                  <tr>
                    <td className="font-bold">Order #</td>
                    <td>1234</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Order Date</td>
                    <td>May 3, 07:28PM</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Status</td>
                    <td>
                      <span className="bg-emerald-500 text-white p-1 rounded">
                        Paid
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="font-bold">SubTotal</td>
                    <td>$157</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <hr className="my-5" />
            {/* Order Items */}
            <div>
              {/* Product Item */}
              <div className="flex gap-6">
                <div className="w-16 h-16 flex items-center border border-gray-300">
                  <img src={`${baseUrl}/img/1_1.jpg`} alt="" />
                </div>
                <div className="flex-1 flex flex-col justify-between pb-3">
                  <h3 className="text-ellipsis mb-4">
                    Logitech G502 HERO High Performance Wired Gaming Mouse, HERO 25K
                    Sensor, 25,600 DPI, RGB, Adjustable Weights, 11
                  </h3>
                </div>
                <div className="flex flex-col justify-between items-end pb-3 w-32">
                  <div className="text-lg mb-4">$17.99</div>
                </div>
              </div>
              {/*/ Product Item */}
              <hr className="my-2" />
              {/* Product Item */}
              <div className="flex gap-6">
                <div className="w-16 h-16 flex items-center border border-gray-300">
                  <img src={`${baseUrl}/img/1_2.jpg`} alt="" />
                </div>
                <div className="flex-1 flex flex-col justify-between pb-3">
                  <h3 className="text-ellipsis mb-4">
                    Logitech G502 HERO High Performance Wired Gaming Mouse, HERO 25K
                    Sensor, 25,600 DPI, RGB, Adjustable Weights, 11
                  </h3>
                </div>
                <div className="flex flex-col justify-between items-end pb-3 w-32">
                  <div className="text-lg mb-4">$17.99</div>
                </div>
              </div>
              {/*/ Product Item */}
              <hr className="my-2" />
              {/* Product Item */}
              <div className="flex gap-6">
                <div className="w-16 h-16 flex items-center border border-gray-300">
                  <img src={`${baseUrl}/img/1_3.jpg`} alt="" />
                </div>
                <div className="flex-1 flex flex-col justify-between pb-3">
                  <h3 className="text-ellipsis mb-4">
                    Logitech G502 HERO High Performance Wired Gaming Mouse, HERO 25K
                    Sensor, 25,600 DPI, RGB, Adjustable Weights, 11
                  </h3>
                </div>
                <div className="flex flex-col justify-between items-end pb-3 w-32">
                  <div className="text-lg mb-4">$17.99</div>
                </div>
              </div>
              {/*/ Product Item */}
            </div>
            {/*/ Order Items */}
            <div className="border-t border-gray-300 pt-4">
              <button
                type="submit"
                className="btn-primary flex justify-center items-center w-full py-3 text-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
                Proceed to Pay
              </button>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}
export default orderDetails