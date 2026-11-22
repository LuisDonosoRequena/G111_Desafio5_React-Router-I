import { useState } from "react";

export default function RegisterPage({ onLogin }) {
  const [form, setForm] = useState({ email: "", password: "", confirmPassword: "" });
  const [feedback, setFeedback] = useState({ type: "", message: "" });

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    setFeedback({ type: "", message: "" });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!form.email.trim() || !form.password || !form.confirmPassword) {
      setFeedback({ type: "error", message: "Todos los campos son obligatorios." });
    } else if (form.password.length < 6) {
      setFeedback({ type: "error", message: "La contraseña debe tener al menos 6 caracteres." });
    } else if (form.password !== form.confirmPassword) {
      setFeedback({ type: "error", message: "Las contraseñas no coinciden." });
    } else {
      setFeedback({ type: "success", message: "¡Registro exitoso! Tus datos son correctos." });
    }
  };

  return (
    <section className="auth-card">
      <h1>Crear cuenta</h1>
      <p className="auth-subtitle">Regístrate en Pizzería Mamma Mia</p>
      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-3">
          <label htmlFor="register-email" className="form-label">Email</label>
          <input id="register-email" className="form-control" type="email" name="email" value={form.email} onChange={handleChange} placeholder="tu@email.com" />
        </div>
        <div className="mb-3">
          <label htmlFor="register-password" className="form-label">Contraseña</label>
          <input id="register-password" className="form-control" type="password" name="password" value={form.password} onChange={handleChange} placeholder="Mínimo 6 caracteres" />
        </div>
        <div className="mb-3">
          <label htmlFor="register-confirm" className="form-label">Confirmar contraseña</label>
          <input id="register-confirm" className="form-control" type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} placeholder="Repite tu contraseña" />
        </div>
        {feedback.message && <div className={`alert alert-${feedback.type === "success" ? "success" : "danger"}`} role="alert">{feedback.message}</div>}
        <button className="btn btn-danger w-100" type="submit">Crear cuenta</button>
      </form>
      <p className="auth-switch">¿Ya tienes cuenta? <button type="button" className="link-button" onClick={onLogin}>Inicia sesión</button></p>
    </section>
  );
}
