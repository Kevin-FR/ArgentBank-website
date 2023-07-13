import PropTypes from "prop-types";

import "./style.scss";

const FeatureCard = ({ imageSrc, imageAlt, title, description }) => (
  <div className="feature-item">
    <img
      data-testid="card-image-testid"
      className="feature-icon"
      src={imageSrc}
      alt={imageAlt}
    />
    <h3 className="feature-item-title">{title}</h3>
    <p>{description}</p>
  </div>
);

FeatureCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

FeatureCard.defaultProps = {
  imageAlt: "",
};

export default FeatureCard;
