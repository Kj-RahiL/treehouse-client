import { BsCart, BsSearch } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import leaf from "../../assets/leaf.png";
const link = (
  <>
    <li>
      <NavLink
        to="/"
        style={({ isActive }) => {
          return {
            color: isActive ? "#ced6d0" : "",
            borderBottom: isActive ? "2px solid #fff" : "black",
            fontWeight: isActive ? "bold" : "",
            background: isActive ? "none" : "",
          };
        }}
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/product"
        style={({ isActive }) => {
          return {
            color: isActive ? "#ced6d0" : "",
            borderBottom: isActive ? "2px solid #fff" : "black",
            fontWeight: isActive ? "bold" : "",
            background: isActive ? "none" : "",
          };
        }}
      >
        Products
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/about"
        style={({ isActive }) => {
          return {
            color: isActive ? "#ced6d0" : "",
            borderBottom: isActive ? "2px solid #fff" : "black",
            fontWeight: isActive ? "bold" : "",
            background: isActive ? "none" : "",
          };
        }}
      >
        About
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/blog"
        style={({ isActive }) => {
          return {
            color: isActive ? "#ced6d0" : "",
            borderBottom: isActive ? "2px solid #fff" : "black",
            fontWeight: isActive ? "bold" : "",
            background: isActive ? "none" : "",
          };
        }}
      >
        Blog
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/contact"
        style={({ isActive }) => {
          return {
            color: isActive ? "#ced6d0" : "",
            borderBottom: isActive ? "2px solid #fff" : "black",
            fontWeight: isActive ? "bold" : "",
            background: isActive ? "none" : "",
          };
        }}
      >
        Contact
      </NavLink>
    </li>
  </>
);

const Navbar = () => {
  return (
      <div className="navbar fixed z-10 bg-[#04190a] bg-opacity-35 text-white mx-auto max-w-screen">
        <div className="navbar-start">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content ">
            {/* Page content here */}
            <label htmlFor="my-drawer" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
          </div>
          <div className="drawer-side ">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-[#04190a] text-white min-h-full w-80 p-4 glass">
              {/* Sidebar content here */}
              {link}
            </ul>
          </div>
          <a className="text-[#083214] font-extrabold tracking-wider text-white-border text-2xl logo-font flex justify-center items-center">
            Tree
            <span>
              <img src={leaf} alt="leaf" />
            </span>
            House
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-medium text-base">
            {link}
          </ul>
        </div>
        <div className="navbar-end">
          <BsSearch className="text-2xl font-thin mr-10" />
          <BsCart className="text-2xl" />
        </div>
      </div>

  );
};

export default Navbar;
