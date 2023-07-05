import "./style.scss";
import Button, { BUTTON_TYPES } from "../Button";

const UserHeader = () => (
  <div className="user-header">
    <h1>
      Welcome back
      <br />
      Tony Jarvis!
    </h1>
    <Button className="user-header-button" type={BUTTON_TYPES.DEFAULT}>Edit Name</Button>
  </div>
);

export default UserHeader;
