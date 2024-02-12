import { Link } from "react-router-dom";
import NavBar from "./NavBar.jsx";
import "../cssModules/Home.css";
import ShopItem from "./ShopItem.jsx";
import useFetchShop from "./useFetchShop.jsx";
export default function Home() {
  const { ShopArr, error } = useFetchShop(
    "https://fakestoreapi.com/products/category/jewelery"
  );
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
        <div className="ItemContainer">
          {ShopArr.map((item, index) => (
            <ShopItem
              key={index}
              ItemName={item.title}
              ItemPrice={item.price}
              ItemImage={item.image}
              className="Item"
            />
          ))}
        </div>
      </div>
      {/* Other sections (e.g., special offers, about us, etc.) can be added here */}
    </>
  );
}
