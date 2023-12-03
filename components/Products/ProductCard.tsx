import { baseUrl } from "@/config/appConfig";
import { setAddCart } from "@/lib/reduxStore/slices/storeSlice";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
interface CartProps {
  product?: any;
}

const ProductCard = (props: CartProps) => {
  const { product } = props;

  console.log("product", product);

  const dispatch = useDispatch();

  const addCart = (data: any) => {
    dispatch(setAddCart({ ...data, quantity: 1 }));
  };

  return (
    <div className="sm:w-full   flex items-center justify-content-center">
      <div className="w-full ">
        {/* product image */}
        <Link
          href={`${baseUrl}/product/${product?.slug}`}
          className="w-full sm:h-44  relative overflow-hidden cursor-pointer  flex items-center justify-content-center mx-auto"
        >
          <picture>
            <img
              src={`${baseUrl}/${product?.images[0]?.image}`}
              alt=""
              className="w-full sm:h-full h-44 rounded-lg group-hover:scale-105 transition duration-500"
              // style={{ height: "150px" }}
            />
          </picture>
          <div className="absolute inset-0 flex items-center justify-center space-x-1 bg-black/20 opacity-0 group-hover:opacity-100 transition">
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-orange-500 p-2 flex items-center justify-center"
            >
              <FaRegHeart className="text-white" />
            </a>
            {/* <a
              href="#"
              className="w-8 h-8 rounded-full bg-orange-500 p-2 flex items-center justify-center"
            >
              <i className="fa-regular fa-heart" />
            </a> */}
          </div>
        </Link>
        {/* product image */}

        {/* Product description */}
        <div className="w-full">
          <Link href={`${baseUrl}/product/${product?.slug}`}>
            <h3 className="pl-3  text-primary font-bold text-sm">
              {product?.title}
            </h3>
          </Link>

          {/* Product Price */}
          <div className="w-full flex items-center space-x-3 pl-3">
            <h4 className="text-paragraph font-medium text-lg">
              ${product?.price}
            </h4>
          </div>
          {/* Product Price */}

          {/* Product Rating*/}
          {/* <div className="flex items-center space-x-3 pl-3 pb-3">
                        <span className="flex">
                            <i className="fa-solid fa-star text-accentOne" />
                            <i className="fa-solid fa-star text-accentOne" />
                            <i className="fa-solid fa-star text-accentOne" />
                            <i className="fa-solid fa-star text-accentOne" />
                            <i className="fa-solid fa-star text-accentOne" />
                        </span>
                        <div>
                            <p className="text-paragraph">(150)</p>
                        </div>
                    </div> */}
          {/* Product Rating*/}
          <div className="w-full mt-6">
            <button
              onClick={() => addCart(product)}
              className="w-full h-13 bottom-0 text-primary border border-accentOne block py-1 font-medium hover:bg-gradient-to-r bg-orange-400 rounded-lg hover:bg-orange-500 hover:text-white transition duration-150"
            >
              <div className="flex items-center justify-center">
                <span className=" pr-3">
                  <AiOutlineShoppingCart />
                </span>
                Add to Cart
              </div>
            </button>
          </div>
        </div>
        {/* Product description */}
      </div>
    </div>
  );
};

export default ProductCard;
