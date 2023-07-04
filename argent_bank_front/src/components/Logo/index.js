/* istanbul ignore file */
import PropTypes from "prop-types";
import "./style.scss";
import logo from "./logo.png";

const Logo = ({ size }) => (
  <div className="Logo">
    <img src={logo} alt="logo"/>
  </div>
);

Logo.propTypes = {
  size: PropTypes.string,
};
Logo.defaultProps = {
  size: "small",
};

export default Logo;
