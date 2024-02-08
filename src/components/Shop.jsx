import ShopItem from './ShopItem';

export default function Shop() {
  const ItemArr = [
    { ItemName: 'Box', ItemPrice: '1500 USDT' },
    { ItemName: 'Shirt', ItemPrice: '300 USDT' },
    { ItemName: 'Toy', ItemPrice: '500 USDT' },
  ];
  return (
    <>
      <h2>Shop</h2>
      {ItemArr.map((item, index) => (
        <ShopItem
          key={index}
          ItemName={item.ItemName}
          ItemPrice={item.ItemPrice}
        />
      ))}
    </>
  );
}
