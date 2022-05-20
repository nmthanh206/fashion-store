import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import { useMemo } from "react";
import { productActions } from "./product-modal/productModalSlice";
import { shoppingCartActions } from "./shopping-cart/cartItemsSlide";
export function useActions() {
   const dispatch = useDispatch();
   return useMemo(
      () =>
         bindActionCreators(
            { ...productActions, ...shoppingCartActions },
            dispatch
         ),
      [dispatch]
   );
}
