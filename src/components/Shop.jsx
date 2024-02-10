import NavBar from "./NavBar.jsx";
import useFetchShop from "./useFetchShop.jsx";
import "../cssModules/Shop.css";
import ErrorPage from "./ErrorPage.jsx";
import ItemColumn from "./ItemColumn.jsx";
export default function Shop({ Items }) {
  const { ShopArr, error } = useFetchShop(Items);

  if (error) {
    return <ErrorPage />;
  }

  // Split ShopArr into columns
  const columnCount = 4; // Change this value as needed
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
