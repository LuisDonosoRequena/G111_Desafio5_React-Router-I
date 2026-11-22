import pizzaNapolitana from "../assets/img/pizza_napolitana.jpg";
import pizzaEspanola from "../assets/img/pizza_espanola.jpg";
import pizzaPepperoni from "../assets/img/pizza_pepperoni.jpg";

// Catálogo de pizzas utilizado por Home y Cart.
export const pizzas = [
  { id: "P001", name: "Napolitana", price: 5950, ingredients: ["mozzarella", "tomates", "jamón", "orégano"], img: pizzaNapolitana },
  { id: "P002", name: "Española", price: 6950, ingredients: ["mozzarella", "gorgonzola", "parmesano", "provolone"], img: pizzaEspanola },
  { id: "P003", name: "Pepperoni", price: 6950, ingredients: ["mozzarella", "pepperoni", "orégano"], img: pizzaPepperoni },
  { id: "P004", name: "Vegetariana", price: 6500, ingredients: ["mozzarella", "tomates", "champiñones", "aceitunas", "pimentón"], img: pizzaNapolitana },
  { id: "P005", name: "Cuatro Quesos", price: 7500, ingredients: ["mozzarella", "gorgonzola", "parmesano", "provolone"], img: pizzaEspanola },
  { id: "P006", name: " 모든 Carnes", price: 8000, ingredients: ["mozzarella", "pepperoni", "jamón", "tocino", "salame"], img: pizzaPepperoni },
];

// Datos iniciales de ejemplo para simular el carrito de compras.
export const pizzaCart = [
  { ...pizzas[0], quantity: 2 },
  { ...pizzas[2], quantity: 1 },
  { ...pizzas[4], quantity: 1 },
];
