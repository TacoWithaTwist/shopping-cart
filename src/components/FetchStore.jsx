async function FetchStore() {
  const response = await fetch('https://fakestoreapi.com/products?limit=9');
  const ItemArr = await response.json();
  if (!ItemArr) {
    throw new Error('Error handling API call');
  }
  return ItemArr;
}
export default FetchStore;
