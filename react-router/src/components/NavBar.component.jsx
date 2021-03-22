import { Link } from "react-router-dom";
const NavBar = () => {
  const styleContainer = {
    display: "flex",
    alignItems: "center",
    background: "gray",
    borderBottom: "1px solid black",
    height: "50px",
  };
  const styleNavItem = {
    marginLeft: "1rem",
  };
  return (
    <div style={styleContainer}>
      <Link style={styleNavItem} to="/">
        home
      </Link>
      <Link style={styleNavItem} to="/products">
        products
      </Link>
    </div>
  );
};

export default NavBar;
