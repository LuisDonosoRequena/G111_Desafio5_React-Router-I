import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <main className="container not-found text-center py-5">
      <div className="not-found-emoji" aria-hidden="true">🍕</div>
      <h1>¡Ups! Página no encontrada</h1>
      <p>La página que buscas no está en nuestro menú.</p>
      <Link className="btn btn-danger mt-2" to="/">Volver al inicio</Link>
    </main>
  );
}
