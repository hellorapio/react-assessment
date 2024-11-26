import { useContext } from "react";
import favContext from "../contexts/favContext";

export default function useFav() {
  //@ts-expect-error
  const { isFav, removeFromFav, addToFav, favs } = useContext(favContext);
  return { isFav, removeFromFav, addToFav, favs };
}
