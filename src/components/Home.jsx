import { Link } from "react-router-dom";
import NavBar from "./NavBar.jsx";
import Shop from "./Shop.jsx";
import "../cssModules/Home.css";
import useFetchShop from "./useFetchShop.jsx";
export default function Home() {
  const { featuredArr, error } = useFetchShop(
    "https://fakestoreapi.com/products/category/jewelery"
  );
  console.log(featuredArr);
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <>
      <NavBar />
      <div className="hero-section">
        <h1>Welcome to Our Store</h1>
        <p>Discover the latest trends in fashion and accessories</p>
        <Link to="/Shop" className="btn btn-primary">
          Shop Now
        </Link>
      </div>
      <div className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          <Shop Items={featuredArr} />
        </div>
      </div>
      {/* Other sections (e.g., special offers, about us, etc.) can be added here */}
    </>
  );
}
