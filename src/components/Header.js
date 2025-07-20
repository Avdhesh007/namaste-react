import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const handleLoginClick = (e) => {
    setLoggedIn(!isLoggedIn);
  };
  const { loggedInUser } = useContext(UserContext);
  // subscribing to the store, using selector
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <button
              className="text-black border-2 cursor-pointer rounded-lg"
              onClick={handleLoginClick}
            >
              {isLoggedIn ? "Logout" : "Login"}
            </button>
          </li>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li>
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li>
            <Link to={"/cart"}>Cart-{cartItems.length}</Link>
          </li>

          <li className="font-bold px-4">
            <Link to={"/user"}>
              <button className="cursor-pointer">{loggedInUser}</button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
