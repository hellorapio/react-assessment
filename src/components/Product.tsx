import { HeartIcon, HeartFilledIcon } from "@radix-ui/react-icons";
import { Product } from "../types";
import { Link } from "react-router-dom";
import useFav from "../hooks/useFav";

// type Props = {
//   isFav: (id: number) => boolean;
//   addToFav: (id: number) => void;
//   removeFromFav: (id: number) => void;
// };

export default function ProductItem({
  image,
  id,
  category,
  rating,
  price,
  title,
  description,
}: Product) {
  const { isFav, addToFav, removeFromFav } = useFav();

  return (
    <div className="bg-slate-800 text-gray-200 flex flex-col items-center gap-4 rounded-md p-6">
      <div className="w-48 h-48 ">
        <Link to={"/" + id}>
          <img
            src={image}
            alt={title}
            className="h-full w-full rounded-md"
          />
        </Link>
      </div>

      <div className="mb-4 flex flex-col gap-4 flex-grow">
        <Link to={"/" + id}>
          <h3 className="text-lg font-bold underline underline-offset-4">
            {title}
          </h3>
        </Link>
        <p className="text-sm">{description}</p>
      </div>
      <div className="flex items-center justify-between w-full">
        <div className="text-green-400 font-bold">${price}</div>
        <div className="flex items-center gap-5">
          <button
            onClick={() => {
              if (!isFav(id)) {
                addToFav({
                  image,
                  id,
                  price,
                  title,
                  description,
                  category,
                  rating,
                });
              } else {
                removeFromFav(id);
              }
            }}
          >
            {!isFav(id) ? (
              <HeartIcon className="scale-125"></HeartIcon>
            ) : (
              <HeartFilledIcon className="scale-125"></HeartFilledIcon>
            )}
          </button>
          <button className="bg-green-600  rounded-lg p-3 font-bold hover:bg-green-800 transition-colors">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
