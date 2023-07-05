import "./style.scss";
import Button, { BUTTON_TYPES } from "../Button";
import { useDispatch, useSelector} from "react-redux";
import { paramsActions } from '../../_store/params.slice';
import Field from "../Field";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";






function UserHeader () {
  // form validation rules
  const validationSchema = Yup.object().shape({
    username: Yup.string().min(5).required("Username is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors, isSubmitting } = formState;

  const dispatch = useDispatch();
  const params = useSelector(x => x.params.value);

  function handleEdit(){
    return dispatch(paramsActions.store("edit_user_header"));
  }
  function handleCancel(){
    return dispatch(paramsActions.clear());
  }

  function onSubmit({ username }) {
    
  }

  if(params === "edit_user_header"){
    return(
      <div className="user-header">
        <h1>
          Edit user info
        </h1>
        <form className="user-header-edit" onSubmit={handleSubmit(onSubmit)}>
        <Field
            placeholder="Mon super username"
            label="User name"
            errors={errors.username?.message}
            className={`user-header-edit-form ${errors.username ? "is-invalid" : ""}`}
          />
          <Field
            className="user-header-edit-form"
            value="Jean"
            label="First name"
            disabled
          />
          <Field
            className="user-header-edit-form"
            value="Dupont"
            label="Last name"
            disabled
          />
        <div className="user-header-edit-buttons">
        <Button  type={BUTTON_TYPES.SUBMIT} disabled={isSubmitting}>Save</Button>
        <Button  onClick={handleCancel} type={BUTTON_TYPES.DEFAULT}>Cancel</Button>
        </div>
        </form>
      </div>
    )

  }else{
    return (
      <div className="user-header">
        <h1>
          Welcome back
          <br />
          Tony Jarvis!
        </h1>
        <Button className="user-header-button" onClick={handleEdit} type={BUTTON_TYPES.DEFAULT}>Edit Name</Button>
      </div>
    );
  }
  
} 

export default UserHeader;
