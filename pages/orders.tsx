import Layout from "@/layouts/Layout";
import React from "react";
const orders = () => {
  return (
    <Layout>
      <main className="h-screen p-5 bg-slate-300">
        <div className="container lg:w-2/3 xl:w-2/3 mx-auto">
          <h1 className="text-3xl font-bold mb-6">My Orders</h1>
          <div className="bg-white p-4 rounded-md shadow-md">
            <table className="table table-auto w-full">
              <thead className="border-b-2">
                <tr className="text-left">
                  <th>Order</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Total</th>
                  <th className="w-64">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td>
                    <a
                      href="/src/order-details.html"
                      className="text-purple-600 hover:text-purple-500"
                    >
                      #1234
                    </a>
                  </td>
                  <td>May 3, 07:28PM</td>
                  <td>
                    <span className="bg-gray-500 text-white p-1 rounded">Unpaid</span>
                  </td>
                  <td>$58.25</td>
                  <td className="flex gap-3">
                    <div x-data="{open: false}">
                      <button className="btn-primary bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 rounded py-1 px-2 flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                        Invoice
                      </button>
                      <template x-teleport="body" />
                    </div>
                    <button className="btn-primary  bg-violet-700 hover:bg-violet-600 active:bg-violet-700 rounded py-1 px-2 flex items-center">
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
                      Pay
                    </button>
                  </td>
                </tr>
                <tr className="border-b">
                  <td>
                    <a
                      href="/src/order-details.html"
                      className="text-purple-600 hover:text-purple-500"
                    >
                      #1234
                    </a>
                  </td>
                  <td>May 3, 07:28PM</td>
                  <td>
                    <span className="bg-emerald-500 text-white p-1 rounded">
                      Paid
                    </span>
                  </td>
                  <td>$58.25</td>
                  <td className="flex gap-3">
                    <button className="btn-primary bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 rounded py-1 px-2 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      Invoice
                    </button>
                    <button className="btn-primary bg-violet-700 hover:bg-violet-600 active:bg-violet-700 rounded py-1 px-2 flex items-center">
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
                      Pay
                    </button>
                  </td>
                </tr>
                <tr className="border-b">
                  <td>
                    <a
                      href="/src/order-details.html"
                      className="text-purple-600 hover:text-purple-500"
                    >
                      #1234
                    </a>
                  </td>
                  <td>May 3, 07:28PM</td>
                  <td>
                    <span className="bg-orange-300 text-white p-1 rounded">
                      Processing
                    </span>
                  </td>
                  <td>$58.25</td>
                  <td className="flex gap-3">
                    <button className="btn-primary bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 rounded py-1 px-2 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      Invoice
                    </button>
                    <button className="btn-primary bg-violet-700 hover:bg-violet-600 active:bg-violet-700 rounded py-1 px-2 flex items-center">
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
                      Pay
                    </button>
                  </td>
                </tr>
                <tr className="border-b">
                  <td>
                    <a
                      href="/src/order-details.html"
                      className="text-purple-600 hover:text-purple-500"
                    >
                      #1234
                    </a>
                  </td>
                  <td>May 3, 07:28PM</td>
                  <td>
                    <span className="bg-emerald-500 text-white p-1 rounded">
                      Paid
                    </span>
                  </td>
                  <td>$58.25</td>
                  <td className="flex gap-3">
                    <button className="btn-primary bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 rounded py-1 px-2 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      Invoice
                    </button>
                    <button className="btn-primary bg-violet-700 hover:bg-violet-600 active:bg-violet-700 rounded py-1 px-2 flex items-center">
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
                      Pay
                    </button>
                  </td>
                </tr>
                <tr className="border-b">
                  <td>
                    <a
                      href="/src/order-details.html"
                      className="text-purple-600 hover:text-purple-500"
                    >
                      #1234
                    </a>
                  </td>
                  <td>May 3, 07:28PM</td>
                  <td>
                    <span className="bg-red-500 text-white p-1 rounded">
                      Cancelled
                    </span>
                  </td>
                  <td>$58.25</td>
                  <td className="flex gap-3">
                    <button className="btn-primary bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 rounded py-1 px-2 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      Invoice
                    </button>
                    <button className="btn-primary bg-violet-700 hover:bg-violet-600 active:bg-violet-700 rounded py-1 px-2 flex items-center">
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
                      Pay
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </Layout>

  )
}
export default orders;