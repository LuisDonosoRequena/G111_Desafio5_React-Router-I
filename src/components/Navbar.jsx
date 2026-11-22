import { Link, NavLink } from "react-router-dom";
import { pizzaCart } from "../data/pizzas";

const total = pizzaCart.reduce((sum, pizza) => sum + pizza.price * pizza.quantity, 0);


export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container flex-wrap">
        <Link className="navbar-brand fw-bold" to="/">🍕 Pizzería Mamma Mia!</Link>
        <div className="navbar-links d-flex flex-wrap align-items-center gap-2">
          <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>🍕 Home</NavLink>
          <NavLink to="/register" className="nav-link">🔐 Registro</NavLink>
          <NavLink to="/login" className="nav-link">🔓 Login</NavLink>
          <NavLink to="/profile" className="nav-link">👤 Perfil</NavLink>
          <Link to="/cart" className="btn btn-outline-info btn-sm">🛒 Total: ${total.toLocaleString("es-CL")}</Link>
        </div>
      </div>
    </nav>
  );
}
