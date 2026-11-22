import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <main className="container py-5">
      <section className="auth-card profile-card">
        <h1>Mi perfil</h1>
        <p className="auth-subtitle">Información de usuario</p>
        <p><strong>Email:</strong> usuario@pizzeriamammamia.cl</p>
        <Link className="btn btn-danger w-100" to="/login">Cerrar sesión</Link>
      </section>
    </main>
  );
}
