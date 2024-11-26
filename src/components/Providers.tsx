import { useState } from "react";
import FavContext from "../contexts/favContext";
import { Product } from "../types";

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  const [favs, setFavs] = useState<Product[]>([]);
  function addToFav(product: Product) {
    setFavs((s) => [...s, product]);
  }

  function removeFromFav(id: number) {
    setFavs((s) => s.filter((val) => val.id !== id));
  }

  function isFav(id: number) {
    return favs.some((product) => product.id === id);
  }

  return (
    <FavContext.Provider value={{ isFav, addToFav, removeFromFav, favs }}>
      {children}
    </FavContext.Provider>
  );
}
