import ShopContext from './ItemArrCon';
import { useContext } from 'react';
function useShopContext() {
  const ItemArr = useContext(ShopContext);
  if (ItemArr === undefined) {
    throw new Error('useShopContext must be used with ShopContext');
  }
  return ItemArr;
}
export default useShopContext;
