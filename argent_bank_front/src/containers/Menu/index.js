import Logo from "../../components/Logo";
import { Link } from "react-router-dom";
import "./style.scss";

const Menu = () => (
  <nav>
    <Logo />
    <Link className="main-nav-item" to="/sign-in"><i className="fa fa-user-circle"></i>Sign In</Link>
  </nav>
);

export default Menu;
