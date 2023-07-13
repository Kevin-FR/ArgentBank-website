import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import "./style.scss";

import Button, { BUTTON_TYPES } from "../../_components/Button";
import Field, { FIELD_TYPES } from "../../_components/Field";
import { fetchWrapper } from "../../_helpers/fetch-wrapper";
import { authActions } from "../../_store/auth.slice";
import { alertActions } from "../../_store/alert.slice";

export { Login };

function Login() {
  const dispatch = useDispatch();

  // Regles de validation du formulaire login
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // Recupérer avec les états si le formulaire est bien remplis
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors, isSubmitting } = formState;

  // Se connecter avec l'aide du helper fetchWrapper et retourner les erreurs si necessaire.
  const onSubmit = async ({ email, password }) => {
    const baseUrl = `${process.env.REACT_APP_API_URL}/user`;

    try {
      const user = await fetchWrapper.post(`${baseUrl}/login`, {
        email,
        password,
      });
      return dispatch(authActions.login(user));
    } catch (error) {
      dispatch(alertActions.error(error));
    }
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <Field
            placeholder=""
            label="Email"
            name="email"
            others={register("email")}
            errors={errors.email?.message}
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
          />
          <Field
            type={FIELD_TYPES.INPUT_PASSWORD}
            others={register("password")}
            placeholder=""
            name="password"
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
