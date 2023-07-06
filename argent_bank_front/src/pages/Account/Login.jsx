import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import "./style.scss";

import { authActions } from "../../_store";

import Button, { BUTTON_TYPES } from "../../_components/Button";
import Field, { FIELD_TYPES } from "../../_components/Field";

export { Login };

function Login() {
  const dispatch = useDispatch();

  // form validation rules
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors, isSubmitting } = formState;

  function onSubmit({ email, password }) {
    return dispatch(authActions.login({ email, password }));
  }

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <Field
            placeholder=""
            label="Email"
            others={register("email")}
            errors={errors.email?.message}
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
          />
          <Field
            type={FIELD_TYPES.INPUT_PASSWORD}
            others={register("password")}
            placeholder=""
            label="Password"
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
            errors={errors.password?.message}
          />
          <Field
            className="inputReverse"
            type={FIELD_TYPES.INPUT_CHECKBOX}
            placeholder=""
            label="remember-me"
            name="Remember me"
          />
          <Button type={BUTTON_TYPES.SUBMIT} disabled={isSubmitting}>
            Sign In
          </Button>
        </form>
      </section>
    </main>
  );
}
