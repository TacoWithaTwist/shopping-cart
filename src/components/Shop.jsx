import NavBar from "./NavBar.jsx";
import useFetchShop from "./useFetchShop.jsx";
import "../cssModules/Shop.css";
const ShopArr = await FakeStoreAPI();
export default function Shop() {
  return (
    <>
      <NavBar />
      <div className="ItemContainer">
        {columns.map((items, index) => (
          <ItemColumn key={index} items={items} />
        ))}
      </div>
    </>
  );
}
