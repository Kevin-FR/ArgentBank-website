import "./style.scss";
import Button, { BUTTON_TYPES } from "../../components/Button";
import Field, { FIELD_TYPES } from "../../components/Field";


function SignIn() {
  return (
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form>
            <Field placeholder="" label="Username" />
            <Field type={FIELD_TYPES.INPUT_PASSWORD} placeholder="" label="Password" />
            <Field className="inputReverse" type={FIELD_TYPES.INPUT_CHECKBOX} placeholder="" label="remember-me" name="Remember me" />
            <Button type={BUTTON_TYPES.SUBMIT} >Sign In</Button>
          </form>
        </section>
      </main>
  );
}

export default SignIn;
