import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ProductDetails from "./components/ProductDetails";
import Providers from "./components/Providers";
import Favorites from "./components/Favorites";

function App() {
  return (
    <Providers>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/favs" element={<Favorites />}></Route>
          <Route path="/:id" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </Providers>
  );
}

export default App;
