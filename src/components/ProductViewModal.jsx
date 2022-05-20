import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import ProductView from "./ProductView";
import Button from "./Button";
import productData from "@/mock/fake-data/products";
import { useActions } from "@/redux/useActions";

const ProductViewModal = () => {
   const productSlug = useSelector((state) => state.productModal.value);
   const actions = useActions();

   const [product, setProduct] = useState(undefined);

   useEffect(() => {
      setProduct(productData.getProductBySlug(productSlug));
   }, [productSlug]);

   return (
      <div
         className={`product-view__modal ${
            product === undefined ? "" : "active"
         }`}
      >
         <div className="product-view__modal__content">
            <ProductView product={product} />
            <div className="product-view__modal__content__close">
               <Button size="sm" onClick={() => actions.remove()}>
                  đóng
                  {/* đóng */}
               </Button>
            </div>
         </div>
      </div>
   );
};

export default ProductViewModal;
