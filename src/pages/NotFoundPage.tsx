import { Link } from "react-router-dom";

const NotFoundPage = () => (
  <div>
    <h1>404 - Página no encontrada</h1>
    <p>La página que buscas no existe.</p>
    <Link to="/">Ir a la página de inicio</Link>
  </div>
);

export default NotFoundPage;