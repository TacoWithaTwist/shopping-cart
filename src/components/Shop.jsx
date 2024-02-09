import ShopItem from "./ShopItem.jsx";
import { FakeStoreAPI } from "./FakeStoreAPI.jsx";
import NavBar from "./NavBar.jsx";
import "../cssModules/Shop.css";
const ShopArr = await FakeStoreAPI();
export default function Shop() {
  return (
    <>
      <NavBar />
      <div id="ItemContainer">
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
    </>
  );
}
