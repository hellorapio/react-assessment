import useFav from "../hooks/useFav";
import { Product } from "../types";
import NavBar from "./Navbar";
import ProductItem from "./Product";
import Wrapper from "./Wrapper";

export default function Favorites() {
  const { favs } = useFav();
  return (
    <div>
      <NavBar />
      <h2 className="text-center font-bold text-xl mt-10">Favorites</h2>
      <Wrapper>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          {favs.map((product: Product) => (
            <ProductItem key={product.id} {...product} />
          ))}
        </div>
      </Wrapper>
    </div>
  );
}
