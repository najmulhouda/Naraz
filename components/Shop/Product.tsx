import { baseUrl } from "@/config/appConfig";
import { useEffect, useState } from "react";
import { BsListUl } from "react-icons/bs";
import { FaLongArrowAltRight } from "react-icons/fa";
import { LuGripHorizontal } from "react-icons/lu";
import ProductCard from "../Products/ProductCard";

const Product = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([] as any);

  const getProducts = async () => {
    const getProducts = await fetch(`${baseUrl}/api/product/get-products`, {
      method: "GET",
    });
    const result = await getProducts.json();

    if (result.status == true) {
      setProducts(result.products);
      setLoading(false);
    } else {
      setProducts([]);
      setLoading(true);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <section className="pt-5">
        <div className="container">
          <div className="row grid grid-cols-4 space-x-5 items-start">
            {/* Col 1 */}
            <div className="col-span-1 shadow-md py-5 px-3 space-y-5 divide-y border border-separate">
              {/* Category Part */}
              <div className="space-y-3">
                <h2 className="text-primary font-medium text-xl uppercase">
                  Category
                </h2>
                <div className="flex justify-between items-center">
                  <div>
                    <form className="space-x-2">
                      <input
                        type="checkbox"
                        className="border border-paragraph rounded-none h-4 w-4 text-orange-400  bg focus:ring-0"
                        id="bedroom"
                        // defaultChecked=""
                      />
                      <label htmlFor="bedroom">Bedroom</label>
                    </form>
                  </div>
                  <div>
                    <p>(15)</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <form className="space-x-2">
                      <input
                        type="checkbox"
                        className="border border-paragraph rounded-none h-4 w-4 text-orange-400  focus:ring-0"
                        id="sofa"
                      />
                      <label htmlFor="sofa">Sofa</label>
                    </form>
                  </div>
                  <div>
                    <p>(23)</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <form className="space-x-2">
                      <input
                        type="checkbox"
                        className="border border-paragraph rounded-none h-4 w-4 text-orange-400  focus:ring-0"
                        id="outdoor"
                      />
                      <label htmlFor="outdoor">Outdoor</label>
                    </form>
                  </div>
                  <div>
                    <p>(7)</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <form className="space-x-2">
                      <input
                        type="checkbox"
                        className="border border-paragraph rounded-none h-4 w-4 text-orange-400  focus:ring-0"
                        id="office"
                      />
                      <label htmlFor="office">Office</label>
                    </form>
                  </div>
                  <div>
                    <p>(45)</p>
                  </div>
                </div>
              </div>
              {/* Brand Part */}
              <div className="space-y-3 pt-3">
                <h2 className="text-primary font-medium text-xl uppercase">
                  Brand
                </h2>
                <div>
                  <div>
                    <form className="space-x-2">
                      <input
                        type="checkbox"
                        className="border border-paragraph rounded-none h-4 w-4 text-orange-400  focus:ring-0"
                        // defaultChecked=""
                      />
                      <label htmlFor="women">Hatil</label>
                    </form>
                  </div>
                </div>
                <div>
                  <div>
                    <form className="space-x-2">
                      <input
                        type="checkbox"
                        className="border border-paragraph rounded-none h-4 w-4 text-orange-400  focus:ring-0"
                      />
                      <label htmlFor="women">Brothers</label>
                    </form>
                  </div>
                </div>
                <div>
                  <div>
                    <form className="space-x-2">
                      <input
                        type="checkbox"
                        className="border border-paragraph rounded-none h-4 w-4 text-orange-400  focus:ring-0"
                      />
                      <label htmlFor="women">Navana</label>
                    </form>
                  </div>
                </div>
                <div>
                  <div>
                    <form className="space-x-2">
                      <input
                        type="checkbox"
                        className="border border-paragraph rounded-none h-4 w-4 text-orange-400 focus:ring-0"
                      />
                      <label htmlFor="women">Partex</label>
                    </form>
                  </div>
                </div>
              </div>
              {/* Price Part */}
              <div className="space-y-3 pt-3">
                <h2 className="text-primary font-medium text-xl uppercase">
                  Price
                </h2>
                <div>
                  <div>
                    <form className="flex justify-between items-center space-x-3">
                      <div>
                        <input
                          type="text"
                          className="border border-paragraph rounded-none h-8 w-full focus:outline-0 focus:ring-0 focus:border-paragraph"
                          placeholder="Min"
                        />
                      </div>
                      <div>
                        <p>-</p>
                      </div>
                      <div>
                        <input
                          type="text"
                          className="border border-paragraph rounded-none h-8 w-full focus:outline-0 focus:ring-0 focus:border-paragraph"
                          placeholder="Max"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/* Size Part */}
              <div className="space-y-3 pt-3">
                <h2 className="text-primary font-medium text-xl uppercase">
                  Size
                </h2>
                <div className="flex gap-2">
                  <div className="select-size">
                    <input
                      type="radio"
                      name="size"
                      id="xs-size"
                      className="hidden"
                    />
                    <label
                      htmlFor="xs-size"
                      className="w-5 h-5 flex items-center justify-center border border-paragraph rounded-sm text-xs cursor-pointer"
                    >
                      XS
                    </label>
                  </div>
                  <div className="select-size">
                    <input
                      type="radio"
                      name="size"
                      id="s-size"
                      className="hidden"
                    />
                    <label
                      htmlFor="s-size"
                      className="w-5 h-5 flex items-center justify-center border border-paragraph rounded-sm text-xs cursor-pointer"
                    >
                      S
                    </label>
                  </div>
                  <div className="select-size">
                    <input
                      type="radio"
                      name="size"
                      id="m-size"
                      className="hidden"
                    />
                    <label
                      htmlFor="m-size"
                      className="w-5 h-5 flex items-center justify-center border border-paragraph rounded-sm text-xs cursor-pointer"
                    >
                      M
                    </label>
                  </div>
                  <div className="select-size">
                    <input
                      type="radio"
                      name="size"
                      id="l-size"
                      className="hidden"
                    />
                    <label
                      htmlFor="l-size"
                      className="w-5 h-5 flex items-center justify-center border border-paragraph rounded-sm text-xs cursor-pointer"
                    >
                      L
                    </label>
                  </div>
                  <div className="select-size">
                    <input
                      type="radio"
                      name="size"
                      id="xl-size"
                      className="hidden"
                    />
                    <label
                      htmlFor="xl-size"
                      className="w-5 h-5 flex items-center justify-center border border-paragraph rounded-sm text-xs cursor-pointer"
                    >
                      XL
                    </label>
                  </div>
                </div>
              </div>
              {/* Color Part */}
              <div className="space-y-3 pt-3">
                <h2 className="text-primary font-medium text-xl uppercase">
                  Color
                </h2>
                <div className="flex gap-2">
                  <div className="select-color">
                    <input
                      type="radio"
                      name="color"
                      id="yellow-color"
                      className="hidden"
                    />
                    <label
                      htmlFor="yellow-color"
                      className="w-5 h-5 border border-paragraph rounded-sm bg-orange-500 inline-block cursor-pointer"
                    />
                  </div>
                  <div className="select-color">
                    <input
                      type="radio"
                      name="color"
                      id="white-color"
                      className="hidden"
                    />
                    <label
                      htmlFor="white-color"
                      className="w-5 h-5 border border-paragraph rounded-sm bg-white inline-block cursor-pointer"
                    />
                  </div>
                  <div className="select-color">
                    <input
                      type="radio"
                      name="color"
                      id="black-color"
                      className="hidden"
                    />
                    <label
                      htmlFor="black-color"
                      className="w-5 h-5 border border-paragraph rounded-sm bg-black inline-block cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Col 2 */}
            <div className="col-span-3 space-y-5">
              {/* Row 1 */}
              <div className="flex justify-between items-center">
                <div>
                  <select className="w-44 border border-separatorColor px-4 py-3 focus:ring-0 focus:border-orange-500">
                    <option value="focus">Default Sorting</option>
                    <option value="">Price low - high</option>
                    <option value="">Price high - low</option>
                  </select>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="rounded-sm py-1 px-3 bg-orange-400 text-white cursor-pointer">
                    <i className="fa-solid fa-grip" />
                    <LuGripHorizontal />
                  </div>
                  <div className="rounded-sm py-1 px-3 border border-separate cursor-pointer">
                    <BsListUl />
                  </div>
                </div>
              </div>
              {/* Row 2 */}
              <div className="">
                <div className="w-full grid sm:grid-cols-1 md:grid-cols-3 rounded-lg grid-cols-3 gap-2 px-12">
                  {loading ? null : (
                    <>
                      {products.map((item: any, index: number) => (
                        <div
                          key={`product-${index}`}
                          className="col sm:col-span-1 md:col-span-1 p-1  border border-orange-500  shadow rounded-lg border-separate group"
                        >
                          <ProductCard product={item} />
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </div>
              {/* Row 3 */}
              <div className="flex items-center space-x-3 w-20 mx-auto">
                <div className="h-5 w-5 rounded-sm border border-separatorColor flex items-center justify-center px-4 py-4 bg-orange-500 hover:bg-orange-500  text-white cursor-pointer">
                  1
                </div>
                <div className="h-5 w-5 rounded-sm border border-separatorColor flex items-center justify-center px-4 py-4 bg-orange-400 hover:bg-orange-500  transition duration-500 cursor-pointer">
                  2
                </div>
                <div className="h-5 w-5 rounded-sm border border-separatorColor flex items-center justify-center px-4 py-4 bg-orange-400 hover:bg-orange-500   transition duration-500 cursor-pointer">
                  3
                </div>
                <div className="h-5 w-5 rounded-sm border border-separatorColor flex items-center justify-center px-4 py-4 bg-orange-400 hover:bg-orange-500  transition duration-500 cursor-pointer">
                  4
                </div>
                <div className=" rounded-sm border border-separatorColor flex items-center justify-center  p-2 bg-orange-400 hover:bg-orange-500  transition duration-500 cursor-pointer">
                  <FaLongArrowAltRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
