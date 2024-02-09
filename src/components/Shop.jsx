import ShopItem from 'ShopItem.jsxk';
export default function Shop() {
  const ShopArr = async () => {
    const response = await fetch('https://fakestoreapi.com/products?limit=5');
    return response.json();
  };
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
