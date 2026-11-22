import React from "react";
import "./Hero.css"; // aquí puedes poner el fondo con CSS

export default function Hero() {
  return (
    <header className="hero d-flex flex-column align-items-center justify-content-center text-light">
      <h1>¡Pizzería Mamma Mia!</h1>
      <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
    </header>
  );
}
