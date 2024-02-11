import PropTypes from "prop-types";
import "../cssModules/Item.css";
import AddToCartButton from "./AddToCartButton";
function ShopItem(props) {
  return (
    <div className={props.className}>
      <img src={props.ItemImage} alt="" />
      <h3>{props.ItemName}</h3>
      <span>{props.ItemPrice}</span>
      <br />
      <AddToCartButton />
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
