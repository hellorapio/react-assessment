import { useEffect, useState } from "react";
import { Product } from "../types";
import ProductItem from "./Product";
import Wrapper from "./Wrapper";

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://fakestoreapi.com/products");
      setProducts(await res.json());
    }

    fetchData();
  }, []);

  return (
    <div>
      <h2 className="text-center font-bold text-xl mt-10">Product List</h2>
      <Wrapper>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          {products.map((product) => (
            <ProductItem key={product.id} {...product} />
          ))}
        </div>
      </Wrapper>
    </div>
  );
}
