export async function FakeStoreAPI(
  prop = "https://fakestoreapi.com/products?limit=5"
) {
  const response = await fetch(prop);
  const result = await response.json();
  return result;
}
