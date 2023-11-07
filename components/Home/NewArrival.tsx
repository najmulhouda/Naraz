import { baseUrl } from "@/config/appConfig";
import { useEffect, useState } from "react";
import ProductCard from "../Products/ProductCard";

const NewArrival = () => {
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
    <div className="">
      <h2 className="text-center font-semibold text-3xl uppercase pb-10">
        Top New Arrival
      </h2>
      <div className="w-full grid sm:grid-cols-1 md:grid-cols-6 rounded-lg grid-cols-5 gap-2 px-12">
        {loading ? null : (
          <>
            {products.map((item: any, index: number) => (
              <div
                key={`product-${index}`}
                className="col p-2 border border-orange-500  shadow rounded-lg border-separate group"
              >
                <ProductCard product={item} />
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default NewArrival;
