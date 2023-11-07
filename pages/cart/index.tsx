import React from "react";
import { baseUrl } from "@/config/appConfig";
import { useDispatch, useSelector } from "react-redux";
import { setCartList, setCartDelete, setNewQuantity } from '@/lib/reduxStore/slices/storeSlice';
import Layout from "@/layouts/Layout";
import Link from "next/link";


const CartItemPage = () => {

  const dispatch = useDispatch();
  const cartCount = useSelector((state: any) => state.utils.cartList.count);
  const cartList = useSelector((state: any) => state.utils.cartList.list);

  console.log('cartList', cartList)

  const removeCart = (id: any) => {
    dispatch(setCartDelete(id));
  }

  const quantityUpdate = (product_id: any, quantity: any, price: any) => {
    dispatch(setNewQuantity({ product_id, quantity, price }));
  }

  return (
    <Layout>
      <div className="p-5">
        <div className="container lg:w-2/3 xl:w-2/3 mx-auto">
          <h1 className="text-3xl font-bold mb-6">Your Cart Items</h1>
          <div className="bg-white p-4 rounded-lg shadow">
            <div>
              <div>
                <div>
                  {
                    cartList.map((item: any, index: number) => (
                      <div key={index} className="w-full flex flex-col sm:flex-row items-center gap-4">
                        <Link
                          href={`${baseUrl}/product/${item?.product_slug}`}
                          className="w-36 h-32 flex items-center justify-center overflow-hidden"
                        >
                          <img
                            src={`${baseUrl}/${item?.product_images[0]?.image}`}
                            alt=""
                            className="object-cover"
                          />
                        </Link>
                        <div className="flex-1 flex flex-col justify-between">
                          <div className="flex justify-between mb-3">
                            <h3 className="text-lg text-black">{item?.product_title}</h3>
                            <span className="text-lg font-semibold text-black">
                              $<span>{item?.total_price}</span>
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="flex items-center text-black">
                              Qty:
                              <input
                                type="number"
                                onChange={(e) => quantityUpdate(item?.product_id, e.target.value, item?.product_price)}
                                className="ml-3 py-1 border-gray-200 focus:border-purple-600 focus:ring-purple-600 w-16"
                                value={item?.quantity}
                              />
                            </div>
                            <button
                              onClick={() => removeCart(item?.product_id)}
                              className="text-purple-600 hover:text-purple-500"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>))
                  }

                  {/*/ Product Item */}
                  <hr className="my-5" />
                </div>
              </div>
              {/* Product Item */}
            </div>
            {/*/ Product Items */}
            <div className="border-t border-gray-300 pt-4">
              <div className="flex justify-between">
                <span className="font-semibold">Subtotal</span>
                <span className="text-xl">$59</span>
              </div>
              <p className="text-gray-500 mb-6">
                Shipping and taxes calculated at checkout.
              </p>
              <button type="submit" className="btn-primary w-full py-3 text-lg">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartItemPage;
