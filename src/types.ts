export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
};

export type ContextType = {
  addToFav: (product: Product) => void;
  removeFromFav: (id: number) => void;
  isFav: (id: number) => boolean;
  favs: Product[];
};
