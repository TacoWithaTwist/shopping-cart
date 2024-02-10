export async function FakeStoreAPI(prop = "https://fakestoreapi.com/products") {
  const response = await fetch(prop);
  const result = await response.json();
  return result;
}
