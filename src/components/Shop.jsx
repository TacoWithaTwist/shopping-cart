import ShopItem from "./ShopItem.jsx";
import { Link } from "react-router-dom";
import { FakeStoreAPI } from "./FakeStoreAPI.jsx";
const ShopArr = await FakeStoreAPI();
export default function Shop() {
  return (
    <>
      <h1>Shop</h1>
      <Link to="/">Home</Link>
      {ShopArr.map((item, index) => (
        <ShopItem
          key={index}
          ItemName={ShopArr[index].title}
          ItemPrice={ShopArr[index].price}
        />
      ))}
    </>
  );
}
