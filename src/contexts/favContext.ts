import { createContext } from "react";
import { ContextType } from "../types";

const FavContext = createContext<undefined | ContextType>(undefined);

export default FavContext;
