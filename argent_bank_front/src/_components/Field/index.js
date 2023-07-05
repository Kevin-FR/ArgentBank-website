import PropTypes from "prop-types";

import "./style.scss";

export const FIELD_TYPES = {
  INPUT_TEXT: 1,
  INPUT_PASSWORD: 2,
  INPUT_CHECKBOX: 3,
  TEXTAREA: 4,
};

const Field = ({ type = FIELD_TYPES.INPUT_TEXT, className, label, name, placeholder, onChange, errors, others, value, disabled}) => {
  let component;
  switch (type) {
    case FIELD_TYPES.INPUT_TEXT:
      component = (
        <input
          type="text"
          name={name}
          placeholder={placeholder}
          data-testid="field-testid"
          onChange={onChange}
          className={disabled ? `inputField inputField-disabled` : `inputField`}
          disabled = {disabled}
          value={value}
          {...others}
        />
      );
      break;
    case FIELD_TYPES.INPUT_PASSWORD:
      component = (
        <input
          type="password"
          name={name}
          placeholder={placeholder}
          data-testid="field-testid"
          onChange={onChange}
          className={`inputField`}
          {...others}
        />
      );
      break;
    case FIELD_TYPES.INPUT_CHECKBOX:
      component = (
        <input
          type="checkbox"
          name={name}
          placeholder={placeholder}
          data-testid="field-testid"
          onChange={onChange}
          className={`inputField`}
          value={value}
        />
      );
      break;
    case FIELD_TYPES.TEXTAREA:
      component = <textarea name={name} data-testid="field-testid" />;
      break;
    default:
      component = (
        <input
          type="text"
          name={name}
          placeholder={placeholder}
          data-testid="field-testid"
          onChange={onChange}
          className={`inputField ${className}`}
          value={value}
          {...others}
        />
      );
  }


  return (
    <div className={className} >
      <span>{name ? name : label}</span>
      {component}
      <div className="invalid-feedback">{errors}</div>
    </div>
  );
};

Field.propTypes = {
  type: PropTypes.oneOf(Object.values(FIELD_TYPES)),
  name: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};
Field.defaultProps = {
  label: "",
  placeholder: "",
  type: FIELD_TYPES.INPUT_TEXT,
  name: "",
  className:"",
  errors: null,
  disabled: null,
};

export default Field;
