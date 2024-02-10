import ShopItem from "./ShopItem";
export default function ItemColumn({ items }) {
  return (
    <div className="ItemColumn">
      {items.map((item, index) => (
        <ShopItem
          key={index}
          ItemName={item.title}
          ItemPrice={item.price}
          ItemImage={item.image}
          className="Item"
        />
      ))}
    </div>
  );
}
