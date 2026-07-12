import { useProducts } from "../hooks/useProducts";
import { ProductCard } from "./ProductCard";

export function ProductList() {

  const { products, loading, error } = useProducts();

  if (loading)
    return <p>Loading products...</p>;

  if (error)
    return <p>{error}</p>;

  return (
    <>
      {products.map(product => (
        <ProductCard
          key={product.productId}
          product={product}
        />
      ))}
    </>
  );
}