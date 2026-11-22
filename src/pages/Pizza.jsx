import { useEffect, useState } from "react";
import napolitanaImg from "../assets/img/pizza_napolitana.jpg";
import espanolaImg from "../assets/img/pizza_espanola.jpg";
import pepperoniImg from "../assets/img/pizza_pepperoni.jpg";

const API_URL = "http://localhost:5000/api/pizzas/p001";


const getImageForPizza = (pizza) => {
  const name = `${pizza?.name ?? ""} ${pizza?.id ?? ""}`.toLowerCase();
  if (name.includes("pepperoni")) return pepperoniImg;
  if (name.includes("española") || name.includes("espagnola")) return espanolaImg;
  return napolitanaImg;
};


export default function Pizza() {
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    async function loadPizza() {
      try {
        setLoading(true);
        setError("");
        const response = await fetch(API_URL, { signal: controller.signal });
        if (!response.ok) throw new Error(`Error HTTP ${response.status}`);
        const data = await response.json();
        setPizza(data.pizza ?? data);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError("No se pudo obtener el detalle de la pizza. Confirma que el backend esté activo.");
        }
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }
    loadPizza();
    return () => controller.abort();
  }, []);

  if (loading) return <section className="container py-4 text-center" role="status">Cargando detalle…</section>;
  if (error) return <section className="container py-4"><div className="alert alert-warning" role="alert">{error}</div></section>;
  if (!pizza) return null;

  const ingredients = Array.isArray(pizza.ingredients) ? pizza.ingredients : [];
  const image = pizza.img || pizza.image || getImageForPizza(pizza);
  const price = Number(pizza.price || 0);

  return (
    <main className="container py-4">
      <section className="pizza-detail card shadow-sm overflow-hidden mx-auto" style={{ maxWidth: "850px" }}>
        <div className="row g-0">
          <div className="col-md-6">
            <img className="pizza-detail-image w-100 h-100" src={image} alt={`Pizza ${pizza.name}`} />
          </div>
          <div className="col-md-6 card-body p-4">
            <h2 className="text-capitalize">Pizza {pizza.name}</h2>
            <p>{pizza.desc || pizza.description || "Una deliciosa pizza preparada con ingredientes frescos."}</p>
            <h5>Ingredientes</h5>
            <ul>{ingredients.map((item, index) => <li key={`${item}-${index}`}>{item}</li>)}</ul>
            <p className="fs-3 fw-bold">${price.toLocaleString("es-CL")}</p>
            <button type="button" className="btn btn-danger" disabled>Añadir al carrito</button>
          </div>
        </div>
      </section>
    </main>
  );
}
