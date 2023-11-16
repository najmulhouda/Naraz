import { baseUrl } from "@/config/appConfig";
import Layout from "@/layouts/Layout";
import {
  setCartDelete,
  setNewQuantity,
} from "@/lib/reduxStore/slices/storeSlice";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

const CartItemPage = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector((state: any) => state.utils.cartList.count);
  const cartList = useSelector((state: any) => state.utils.cartList.list);

  console.log("cartList", cartList);

  const removeCart = (id: any) => {
    dispatch(setCartDelete(id));
  };

  const quantityUpdate = (product_id: any, quantity: any, price: any) => {
    dispatch(setNewQuantity({ product_id, quantity, price }));
  };

  return (
    <Layout>
      <div className="p-5">
        <div className="container lg:w-2/3 xl:w-2/3 mx-auto">
          <h1 className="text-3xl font-bold mb-6">Your Cart Items</h1>
          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
            <div>
              <div>
                <div>
                  {cartList.map((item: any, index: number) => (
                    <div
                      key={index}
                      className="w-full dark:bg-gray-900 dark:text-white p-2 border rounded-lg flex flex-col sm:flex-row items-center gap-4"
                    >
                      <Link
                        href={`${baseUrl}/product/${item?.product_slug}`}
                        className="w-36 h-32 rounded flex items-center dark:text-white justify-center overflow-hidden"
                      >
                        <picture>
                          <img
                            src={`${baseUrl}/${item?.product_images[0]?.image}`}
                            alt=""
                            className="object-cover"
                          />
                        </picture>
                      </Link>
                      <div className="flex-1 flex flex-col justify-between">
                        <div className="flex justify-between mb-3">
                          <h3 className="text-lg text-black dark:text-white">
                            {item?.product_title}
                          </h3>
                          <span className="text-lg font-semibold text-black dark:text-white">
                            $<span>{item?.total_price}</span>
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center text-black dark:text-white">
                            Qty:
                            <input
                              type="number"
                              onChange={(e) =>
                                quantityUpdate(
                                  item?.product_id,
                                  e.target.value,
                                  item?.product_price
                                )
                              }
                              className="ml-3 py-1 border-orange-400 focus:ring-orange-400 focus:border-oragne-600 dark:bg-gray-800 w-16"
                              value={item?.quantity}
                            />
                          </div>
                          <button
                            onClick={() => removeCart(item?.product_id)}
                            className="text-white bg-orange-400 p-2 rounded hover:bg-orange-500"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/*/ Product Item */}
                  <hr className="my-5" />
                </div>
              </div>
              {/* Product Item */}
            </div>
            {/*/ Product Items */}
            <div className=" border-gray-300 pt-4">
              <div className="flex justify-between">
                <span className="font-semibold dark:text-white">Subtotal</span>
                <span className="text-xl text-black dark:text-white">$59</span>
              </div>
              <p className="text-gray-500 mb-6">
                Shipping and taxes calculated at checkout.
              </p>
              <button
                type="submit"
                className="btn-primary dark:text-white w-full py-3 text-lg"
              >
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
