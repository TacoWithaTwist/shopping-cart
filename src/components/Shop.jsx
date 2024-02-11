import NavBar from "./NavBar.jsx";
import useFetchShop from "./useFetchShop.jsx";
import ItemColumn from "./ItemColumn.jsx";
import "../cssModules/Shop.css";
export default function Shop() {
  const { ShopArr, error } = useFetchShop();
  if (error) {
    return <ErrorPage />;
  }
  const columnCount = 3;
  const columns = Array.from({ length: columnCount }, (_, i) =>
    ShopArr.filter((_, idx) => idx % columnCount === i)
  );
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
