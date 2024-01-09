import { baseUrl } from "@/config/appConfig";
import { Context } from "vm";
export async function getServerSideProps(context: Context) {
  // Fetch the product data based on the ID/slug from the context
  const { productId } = context.query;

  // Fetch the product details using the productId (or slug) from your data source
  // Replace this with your actual fetching logic (API call or database query)
  const productData = await fetch(`${baseUrl}/api/product/get-products`);
  const product = await productData.json();

  // Pass the product details as props to the page
  return {
    props: {
      product,
    },
  };
}
