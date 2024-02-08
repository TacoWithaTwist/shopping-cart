import PropTypes from 'prop-types';
function ShopItem(props) {
  return (
    <>
      <img src="#" alt="" />
      <h3>{props.ItemName}</h3>
      <span>{props.ItemPrice}</span>
    </>
  );
}
ShopItem.propTypes = {
  ItemName: PropTypes.string.isRequired,
  ItemPrice: PropTypes.string.isRequired,
};

export default ShopItem;
