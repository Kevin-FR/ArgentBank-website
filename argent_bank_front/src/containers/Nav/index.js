import Logo from "../../_components/Logo";
import { Link } from "react-router-dom";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../_store/auth.slice";

function NavAuth() {
  const profile = useSelector((x) => x.profile.value);
  const dispatch = useDispatch();
  const logout = () => dispatch(authActions.logout());

  if (profile) {
    return (
      <div>
        <Link className="main-nav-item" to="/my-account">
          <i className="fa fa-user-circle"></i>
          {profile.body.firstName}
        </Link>
        <Link className="main-nav-item" onClick={logout}>
          <i className="fa fa-sign-out"></i>Logout
        </Link>
      </div>
    );
  } else {
    return (
      <Link className="main-nav-item" to="/account/login">
        <i className="fa fa-user-circle"></i>Sign In
      </Link>
    );
  }
}

const Nav = () => (
  <nav>
    <Logo />
    {NavAuth()}
  </nav>
);

export default Nav;
