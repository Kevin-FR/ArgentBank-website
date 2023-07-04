/* istanbul ignore file */
import PropTypes from "prop-types";
import "./style.scss";
import logo from "./logo.png";
import { Link } from "react-router-dom";


const Logo = ({ size }) => (
  <div className="Logo">
    <Link to="/"><img src={logo} alt="logo"/></Link>
    
  </div>
);

Logo.propTypes = {
  size: PropTypes.string,
};
Logo.defaultProps = {
  size: "small",
};

export default Logo;
