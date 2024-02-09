import PropTypes from "prop-types";
function ShopItem(props) {
  return (
    <div className={props.className}>
      <img src={props.ItemImage} alt="" />
      <h3>{props.ItemName}</h3>
      <span>{props.ItemPrice}</span>
      <button>Add To Cart</button>
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
