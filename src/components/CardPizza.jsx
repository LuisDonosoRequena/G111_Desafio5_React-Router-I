import napolitanaImg from "../assets/img/pizza_napolitana.jpg";
import espanolaImg from "../assets/img/pizza_espanola.jpg";
import pepperoniImg from "../assets/img/pizza_pepperoni.jpg";
import { Link } from "react-router-dom";

function getPizzaImage(pizza) {
  if (pizza.img || pizza.image) return pizza.img || pizza.image;
  const name = `${pizza.name ?? ""} ${pizza.id ?? ""}`.toLowerCase();
  if (name.includes("pepperoni")) return pepperoniImg;
  if (name.includes("española") || name.includes("espagnola")) return espanolaImg;
  return napolitanaImg;
}


export default function CardPizza({ id, name, price = 0, ingredients = [], img, image, desc, description }) {
  const pizzaImage = getPizzaImage({ id, name, img, image });
  const list = Array.isArray(ingredients) ? ingredients : [];
  return (
    <article className="card pizza-card m-3">
      <img src={pizzaImage} className="card-img-top pizza-card-image" alt={`Pizza ${name}`} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-capitalize">Pizza {name}</h5>
        <p className="text-muted small">{desc || description || ""}</p>
        <hr />
        <p className="mb-2"><strong>Ingredientes:</strong></p>
        <ul className="pizza-ingredients">
          {list.map((ingredient, index) => <li key={`${ingredient}-${index}`}>🍕 {ingredient}</li>)}
        </ul>
        <hr />
        <p className="fs-4 fw-bold text-center mb-3">${Number(price).toLocaleString("es-CL")}</p>
        <div className="d-flex justify-content-between gap-2 mt-auto">
          <Link to="/pizza/p001" className="btn btn-outline-info">Ver más</Link>
          <button type="button" className="btn btn-danger" disabled>Añadir</button>
        </div>
      </div>
    </article>
  );
}
