import { useState } from "react";

export default function LoginPage({ onRegister }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const [feedback, setFeedback] = useState({ type: "", message: "" });

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    setFeedback({ type: "", message: "" });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!form.email.trim() || !form.password) {
      setFeedback({ type: "error", message: "Todos los campos son obligatorios." });
    } else if (form.password.length < 6) {
      setFeedback({ type: "error", message: "La contraseña debe tener al menos 6 caracteres." });
    } else {
      setFeedback({ type: "success", message: "¡Inicio de sesión exitoso! Los datos son correctos." });
    }
  };

  return (
    <section className="auth-card">
      <h1>Iniciar sesión</h1>
      <p className="auth-subtitle">Bienvenido nuevamente</p>
      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-3">
          <label htmlFor="login-email" className="form-label">Email</label>
          <input id="login-email" className="form-control" type="email" name="email" value={form.email} onChange={handleChange} placeholder="tu@email.com" />
        </div>
        <div className="mb-3">
          <label htmlFor="login-password" className="form-label">Contraseña</label>
          <input id="login-password" className="form-control" type="password" name="password" value={form.password} onChange={handleChange} placeholder="Mínimo 6 caracteres" />
        </div>
        {feedback.message && <div className={`alert alert-${feedback.type === "success" ? "success" : "danger"}`} role="alert">{feedback.message}</div>}
        <button className="btn btn-danger w-100" type="submit">Ingresar</button>
      </form>
      <p className="auth-switch">¿No tienes cuenta? <button type="button" className="link-button" onClick={onRegister}>Regístrate</button></p>
    </section>
  );
}
