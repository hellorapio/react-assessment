import { Link } from "react-router-dom";
import Wrapper from "./Wrapper";

export default function NavBar() {
  return (
    <nav className="bg-slate-600 text-gray-100 h-16">
      <Wrapper>
        <div className="flex justify-center -mt-4">
          <ul className="flex gap-6">
            <li>
              <Link
                to="/"
                className="hover:opacity-60 transition-all duration-300"
              >
                Product List
              </Link>
            </li>
            <li>
              <Link
                to="/favs"
                className="hover:opacity-60 transition-all duration-300"
              >
                Favorites
              </Link>
            </li>
          </ul>
        </div>
      </Wrapper>
    </nav>
  );
}
