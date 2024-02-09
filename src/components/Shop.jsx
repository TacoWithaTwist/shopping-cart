import ShopItem from "./ShopItem.jsx";
import NavBar from "./NavBar.jsx";
import useFetchShop from "./useFetchShop.jsx";
import "../cssModules/Shop.css";
import ErrorPage from "./ErrorPage.jsx";
export default function Shop({ Items }) {
  const { ShopArr, error } = useFetchShop(Items);
  if (error) {
    return <ErrorPage />;
  }
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
