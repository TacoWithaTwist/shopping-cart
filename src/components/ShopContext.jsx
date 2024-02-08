import { createContext, useContext } from 'react';
import ItemArr from './FetchStore.jsx';
export const ShopContext = (createContext < ItemArr) | (undefined > undefined);
export function useShopContext() {
  const ItemArr = useContext(ShopContext);
  if (ItemArr === undefined) {
    throw new Error('useShopContext must be used with ShopContext');
  }
  return ItemArr;
}
