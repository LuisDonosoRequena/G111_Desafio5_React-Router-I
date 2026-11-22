
import headerImg from "../assets/img/Header.jpg";

export default function Header() {
  return (
    <header
      className="text-center text-light py-5"
      style={{
        backgroundImage: `url(${headerImg})`, // ✅ import desde src/assets
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "300px",
      }}
    >
      <h1 className="fw-bold">¡Pizzería Mamma Mia!</h1>
      <p className="fs-4">¡Tenemos las mejores pizzas que podrás encontrar!</p>
    </header>
  );
}
