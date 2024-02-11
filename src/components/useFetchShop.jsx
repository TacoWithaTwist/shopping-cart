import { useEffect, useState } from "react";
import { FakeStoreAPI } from "./FakeStoreAPI";
export default function useFetchShop(Items) {
  const [ShopArr, setShopArr] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchShopItems = async () => {
      try {
        const items = await FakeStoreAPI(Items);
        setShopArr(items);
      } catch (error) {
        setError(error);
      }
    };
    fetchShopItems();
  }, [Items]);

  return { ShopArr, error };
}
