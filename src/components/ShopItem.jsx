import PropTypes from "prop-types";
import "../cssModules/Item.css";
import AddToCartButton from "./AddToCartButton";
import { useContext } from "react";
function ShopItem(props) {
  const { addToCart } = useContext(ShopContext);
  const handleAddToCart = () => {
    addToCart({
      ItemName: props.ItemName,
      ItemPrice: props.ItemPrice,
      ItemImage: props.ItemImage,
    });
  };
  return (
    <div className={props.className}>
      <img src={props.ItemImage} alt="" />
      <h3>{props.ItemName}</h3>
      <span>{props.ItemPrice}</span>
      <br />
      <AddToCartButton onClick={handleAddToCart()} />
    </div>
  );
}
ShopItem.propTypes = {
  ItemName: PropTypes.string.isRequired,
  ItemPrice: PropTypes.number.isRequired,
  ItemImage: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default ShopItem;
