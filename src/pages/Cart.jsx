import { useState } from "react";
import { pizzaCart } from "../data/pizzas";

export default function Cart() {
  const [cart, setCart] = useState(pizzaCart);

  const changeQuantity = (id, amount) => {
    setCart((currentCart) =>
      currentCart
        .map((pizza) => pizza.id === id
          ? { ...pizza, quantity: pizza.quantity + amount }
          : pizza)
        .filter((pizza) => pizza.quantity > 0)
    );
  };

  const total = cart.reduce((sum, pizza) => sum + pizza.price * pizza.quantity, 0);

  return (
    <main className="container cart-container py-5">
      <h1 className="text-center mb-4">🛒 Carrito de compras</h1>
      <section className="cart-panel">
        {cart.length === 0 ? (
          <p className="text-center text-muted py-4 mb-0">Tu carrito está vacío.</p>
        ) : cart.map((pizza) => (
          <article className="cart-item" key={pizza.id}>
            <img src={pizza.img} alt={`Pizza ${pizza.name}`} className="cart-item-image" />
            <div className="cart-item-info">
              <h2>{pizza.name}</h2>
              <p className="mb-1">${pizza.price.toLocaleString("es-CL")} c/u</p>
              <strong>Subtotal: ${(pizza.price * pizza.quantity).toLocaleString("es-CL")}</strong>
            </div>
            <div className="quantity-controls" aria-label={`Cantidad de ${pizza.name}`}>
              <button type="button" className="btn btn-outline-danger" onClick={() => changeQuantity(pizza.id, -1)} aria-label={`Quitar una ${pizza.name}`}>−</button>
              <span>{pizza.quantity}</span>
              <button type="button" className="btn btn-outline-primary" onClick={() => changeQuantity(pizza.id, 1)} aria-label={`Añadir una ${pizza.name}`}>+</button>
            </div>
          </article>
        ))}
        <div className="cart-total">
          <h2>Total: ${total.toLocaleString("es-CL")}</h2>
          <button type="button" className="btn btn-success btn-lg" disabled={cart.length === 0}>Pagar</button>
        </div>
      </section>
    </main>
  );
}
