
import { NavLink } from "react-router-dom";

const NavLinkRoutes = () => {
  return 
      <li>
        <NavLink
          to="/"
          style={({ isActive }) => {
            return {
              color: isActive ? "#F4AF00" : "",
              borderBottom: isActive ? "2px solid #F4AF00" : "black",
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
          to="/gallery"
          style={({ isActive }) => {
            return {
              color: isActive ? "#F4AF00" : "",
              borderBottom: isActive ? "2px solid #F4AF00" : "black",
              fontWeight: isActive ? "bold" : "",
              background: isActive ? "none" : "",
            };
          }}
        >
          Gallery
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/trainer"
          style={({ isActive }) => {
            return {
              color: isActive ? "#F4AF00" : "",
              borderBottom: isActive ? "2px solid #F4AF00" : "black",
              fontWeight: isActive ? "bold" : "",
              background: isActive ? "none" : "",
            };
          }}
        >
          Trainer
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/classes"
          style={({ isActive }) => {
            return {
              color: isActive ? "#F4AF00" : "",
              borderBottom: isActive ? "2px solid #F4AF00" : "black",
              fontWeight: isActive ? "bold" : "",
              background: isActive ? "none" : "",
            };
          }}
        >
          Classes
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          style={({ isActive }) => {
            return {
              color: isActive ? "#F4AF00" : "",
              borderBottom: isActive ? "2px solid #F4AF00" : "black",
              fontWeight: isActive ? "bold" : "",
              background: isActive ? "none" : "",
            };
          }}
        >
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/forums"
          style={({ isActive }) => {
            return {
              color: isActive ? "#F4AF00" : "",
              borderBottom: isActive ? "2px solid #F4AF00" : "black",
              fontWeight: isActive ? "bold" : "",
              background: isActive ? "none" : "",
            };
          }}
        >
          Forums
        </NavLink>
      </li>
    </>
 

export default NavLinkRoutes;
