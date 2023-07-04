import PropTypes from "prop-types";

import "./style.scss";
const Hero = ({ hide, imageSrc, imageAlt, subtitles, text }) => (
    <div className="hero">
      <img src={imageSrc}  alt={imageAlt}/>
        <section className="hero-content">
        
          <h2 className="sr-only">{hide}</h2>
          {subtitles.map((subtitle, sindex) => (
              <p key={`hero-${sindex}`} className="subtitle">{subtitle}</p>
            ))}
          <p className="text">{text}</p>
        </section>
      </div>
  );

  Hero.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  hide: PropTypes.string,
  subtitles: PropTypes.array.isRequired,
  text: PropTypes.string.isRequired,
};

Hero.defaultProps = {
  hide: "Promoted Content",
  imageAlt: "Hero",
}

export default Hero;