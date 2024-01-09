export default function ProductDetails({ product }: any) {
  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <img src={product.image} alt={product.name} />
      <p>Price: ${product.price}</p>
      {/* Display other product details */}
    </div>
  );
}
