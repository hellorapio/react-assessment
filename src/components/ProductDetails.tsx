import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../types";
import NavBar from "./Navbar";
import {
  HeartIcon,
  HeartFilledIcon,
  StarIcon,
  StarFilledIcon,
} from "@radix-ui/react-icons";
import useFav from "../hooks/useFav";
import Wrapper from "./Wrapper";

export default function ProductDetails() {
  const params = useParams();
  const { isFav, removeFromFav, addToFav } = useFav();
  const [product, setProduct] = useState<Product>({
    title: "",
    id: 0,
    category: "",
    price: 0,
    image: "",
    description: "",
    rating: { count: 0, rate: 0 },
  });

  function calcStars(n: number) {
    const arr = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= n) arr.push(1);
      else arr.push(0);
    }
    return arr;
  }

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "https://fakestoreapi.com/products/" + params.id
      );
      setProduct(await res.json());
    }

    fetchData();
  }, [params.id]);

  return (
    <div>
      <NavBar></NavBar>
      <Wrapper>
        <div className="flex md:flex-row flex-col items-center md:items-start gap-4 p-6">
          <div className="w-1/2">
            <img
              src={product.image}
              alt={product.title}
              className="h-full w-full rounded-md"
            />
          </div>

          <div>
            <div className="mb-4 flex flex-col gap-4">
              <h3 className="text-lg font-bold">{product.title}</h3>
              <p className="text-sm -mt-4 italic">{product.category}</p>
              <p className="text-sm -mt-3 italic flex gap-1">
                {product.rating.count}
                {calcStars(Math.round(product.rating.rate)).map((star) =>
                  star === 1 ? (
                    <StarFilledIcon className="scale-125" />
                  ) : (
                    <StarIcon className="scale-125" />
                  )
                )}
              </p>
              <p className="text-sm">{product.description}</p>
            </div>
            <div className="flex items-center justify-between w-full">
              <div className="text-green-400 font-bold">
                ${product.price}
              </div>
              <div className="flex items-center gap-5">
                <button
                  onClick={() => {
                    if (!isFav(product.id)) {
                      addToFav({
                        image: product.image,
                        id: product.id,
                        price: product.price,
                        title: product.title,
                        description: product.description,
                        category: product.category,
                        rating: product.rating,
                      });
                    } else {
                      removeFromFav(product.id);
                    }
                  }}
                >
                  {!isFav(product.id) ? (
                    <HeartIcon className="scale-125"></HeartIcon>
                  ) : (
                    <HeartFilledIcon className="scale-125"></HeartFilledIcon>
                  )}
                </button>
                <button className="bg-green-600 text-gray-100 rounded-lg p-3 font-bold hover:bg-green-800 transition-colors">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
