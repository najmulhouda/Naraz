import React from "react";
import Head from 'next/head'
import { baseUrl } from "@/config/appConfig";
import Layout from "@/layouts/Layout"

const ProductPage = () => {

    return (
      <Layout>
      <main className="mt-10 p-5">
        <div className="container mx-auto">
          <div className="grid gap-6 grid-cols-1 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <div>
                <div className="relative">
                  <div/>
                  <a  className="cursor-pointer bg-black/30 text-white absolute left-0 top-1/2 -translate-y-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                  </a>
                  <a  className="cursor-pointer bg-black/30 text-white absolute right-0 top-1/2 -translate-y-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
                <div className="flex">
                  <template />
                </div>
              </div>
            </div>
            <div className="lg:col-span-2">
              <h1 className="text-lg font-semibold">
                Logitech G502 HERO High Performance Wired Gaming Mouse, HERO 25K
                Sensor, 25,600 DPI, RGB, Adjustable Weights, 11
              </h1>
              <div className="text-xl font-bold mb-6">$17.99</div>
              <div className="flex items-center mb-6">
                <div className="flex items-center text-orange-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <a href="#" className="ml-3 font-normal text-purple-600 hover:text-purple-500">
                  67 reviews
                </a>
              </div>
              <div className="flex items-center justify-between mb-5">
                <label htmlFor="quantity" className="block font-bold mr-4">
                  Quantity
                </label>
                <input type="number" name="quantity" x-ref="quantityEl" defaultValue={1} className="w-32 focus:border-purple-500 focus:outline-none rounded" />
              </div>
              <button  className="bg-purple-600 text-white py-4 text-lg flex justify-center min-w-0 w-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Add to Cart
              </button>
              <div className="mb-6">
                <div className="text-gray-500 wysiwyg-content">
                  <table>
                    <tbody>
                      <tr>
                        <td>Connectivity Technology</td>
                        <td>USB</td>
                      </tr>
                      <tr>
                        <td>Recommended Uses For Product</td>
                        <td>Gaming</td>
                      </tr>
                      <tr>
                        <td>Brand</td>
                        <td>Logitech G</td> 
                      </tr>
                    </tbody>

                    <tbody>
                      <tr>
                        <td>Compatible Devices</td>
                        <td>Personal Computer</td>
                      </tr>
                      <tr>
                        <td>Series</td>
                        <td>Logitech G502 HERO High Performance Gaming Mouse</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className=''>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Deserunt suscipit natus quisquam optio voluptatem quo beatae
                    ex similique, pariatur laborum asperiores explicabo delectus
                    culpa cumque corrupti quasi incidunt at quos!
                  </p>
                  <h4>About the item</h4>
                  <ul className="list-disc pl-6">
                    <li>
                      Hero 25K sensor through a software update from G HUB, this
                      upgrade is free to all players: Our most advanced, with 1:1
                      tracking, 400-plus ips, and 100 - 25,600 max dpi sensitivity
                      plus zero smoothing, filtering, or acceleration
                    </li>
                    <li>
                      11 customizable buttons and onboard memory: Assign custom
                      commands to the buttons and save up to five ready to play
                      profiles directly to the mouse
                    </li>
                    <li>
                      Adjustable weight system: Arrange up to five removable 3.6
                      grams weights inside the mouse for personalized weight and
                      balance tuning
                    </li>
                    <li>
                      Programmable RGB Lighting and Lightsync technology:
                      Customize lighting from nearly 16.8 million colors to match
                      your teams colors, sport your own or sync colors with other
                      Logitech G gear
                    </li>
                    <li>
                      Mechanical switch button tensioning: Metal spring tensioning
                      system and pivot hinges are built into left and right gaming
                      mouse buttons for a crisp, clean click feel with rapid click
                      feedback
                    </li>
                  </ul>
                </div>
                <p className="text-right">
                  <button  className="text-purple-500 hover:text-purple-700 ">Read More</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      </Layout>
    );
};

export default ProductPage;