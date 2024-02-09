export async function FakeStoreAPI() {
  const response = await fetch("https://fakestoreapi.com/products?limit=5");
  const result = await response.json();
  return result;
}
