import PropTypes from "prop-types";

import "./style.scss";

export const FIELD_TYPES = {
  INPUT_TEXT: 1,
  INPUT_PASSWORD: 2,
  INPUT_CHECKBOX: 3,
  TEXTAREA: 4,
};

const Field = ({ type = FIELD_TYPES.INPUT_TEXT, className, label, name, placeholder }) => {
  let component;
  switch (type) {
    case FIELD_TYPES.INPUT_TEXT:
      component = (
        <input
          type="text"
          name={name}
          placeholder={placeholder}
          data-testid="field-testid"
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
        />
      );
  }


  return (
    <div className={className} >
      <span>{name ? name : label}</span>
      {component}
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
  className:"inputField",
};

export default Field;
