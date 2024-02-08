import { useShopContext } from './ShopContext';
import ShopItem from './ShopItem';

export default function Shop() {
  const ItemArr = useShopContext();
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
