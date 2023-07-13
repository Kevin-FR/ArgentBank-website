import "./style.scss";
import { Link } from "react-router-dom";

function Error404() {
  return (
    <div className="ab-error404">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retourner sur la page d’accueil</Link>
    </div>
  );
}

export default Error404;
