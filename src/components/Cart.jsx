import { ShopContext } from "./ShopContext.jsx";
import NavBar from "./NavBar.jsx";
const Cart = () => {
  const { cartItems } = useContext(ShopContext);
  console.log(cartItems);
  return (
    <div>
      <NavBar />
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <ShopItem
            key={index}
            ItemName={item.title}
            ItemPrice={item.price}
            ItemImage={item.image}
            className="Item"
          />
        ))}
      </ul>
    </div>
  );
};

export default Cart;
