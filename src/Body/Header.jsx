import logo from "../assets/logo-light.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between px-32 py-8 bg-zinc-900">
      <div>
        <Link to="/">
          <img src={logo} alt="logo" height="50" width="120" />
        </Link>
      </div>

      <nav className="flex align-middle justify-center">
        <ul className="flex gap-8 text-stone-50 list-none items-center">
          <li>
            <Link to="/">Home </Link>
          </li>
          <li>
            <Link to="/about">About </Link>
          </li>
          <li>
            <Link to="/contact">Contact </Link>
          </li>
        </ul>
        <button className="text-stone-50 ml-4 bg-orange-500 px-8 py-2 rounded-md">
          Login
        </button>
      </nav>
    </div>
  );
};

export default Header;
