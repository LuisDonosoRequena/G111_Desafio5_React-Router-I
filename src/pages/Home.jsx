import { useEffect, useState } from "react";
import Header from "../components/Header";
import CardPizza from "../components/CardPizza";

const API_URL = "http://localhost:5000/api/pizzas";

export default function Home() {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const loadPizzas = async () => {
      try {
        setLoading(true);
        setError("");
        const response = await fetch(API_URL, { signal: controller.signal });
        if (!response.ok) throw new Error(`Error HTTP ${response.status}`);
        const data = await response.json();
        setPizzas(Array.isArray(data) ? data : data.pizzas ?? []);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError("No fue posible cargar las pizzas. Verifica que el backend esté ejecutándose en localhost:5000.");
        }
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    };
    loadPizzas();
    return () => controller.abort();
  }, []);

  return (
    <div>
      <Header />
      <main className="container py-4">
        <h2 className="text-center mb-4">Nuestro menú</h2>
        {loading && <p className="text-center" role="status">Cargando pizzas…</p>}
        {error && <div className="alert alert-danger text-center" role="alert">{error}</div>}
        {!loading && !error && pizzas.length === 0 && <p className="text-center">No hay pizzas disponibles.</p>}
        <div className="d-flex justify-content-center flex-wrap">
          {pizzas.map((pizza) => <CardPizza key={pizza.id} {...pizza} />)}
        </div>
      </main>
    </div>
  );
}
