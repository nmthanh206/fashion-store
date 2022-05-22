import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import ProductView from "./ProductView";
import Button from "./Button";
import productData from "@/mock/fake-data/products";
import { useActions } from "@/redux/useActions";
import Modal from "react-modal";
const ProductViewModal = () => {
   const productSlug = useSelector((state) => state.productModal.value);
   const actions = useActions();

   const [product, setProduct] = useState(undefined);

   useEffect(() => {
      setProduct(productData.getProductBySlug(productSlug));
   }, [productSlug]);

   return (
      <div className="">
         <Modal
            isOpen={product !== undefined}
            style={{
               overlay: {
                  position: "fixed",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "rgba(255, 255, 255, 0.75)",
                  zIndex: 9999,
                  left: "50%",
                  width: "100%",
                  transform: "translate(-50%, 0)",
               },
               content: {
                  width: "65%",
                  margin: "auto auto",
                  // position: "absolute",
                  // top: "40px",
                  // left: "40px",
                  // right: "40px",
                  // bottom: "40px",
                  border: "1px solid #ccc",
                  // background: "#fff",
                  // overflow: "auto",
                  // WebkitOverflowScrolling: "touch",
                  // borderRadius: "4px",
                  // outline: "none",
                  // padding: "20px",
               },
            }}
         >
            {/* <div className="mx-auto w-[70%]"> */}
            <ProductView product={product} />

            <div className="product-view__modal__content__close">
               <Button size="sm" onClick={() => actions.remove()}>
                  đóng
               </Button>
            </div>
            {/* </div> */}
         </Modal>
         <div className="product-view__modal__content"></div>
      </div>
   );
};

export default ProductViewModal;
// import React, { useEffect, useState } from "react";

// import { useSelector } from "react-redux";
// import ProductView from "./ProductView";
// import Button from "./Button";
// import productData from "@/mock/fake-data/products";
// import { useActions } from "@/redux/useActions";

// const ProductViewModal = () => {
//    const productSlug = useSelector((state) => state.productModal.value);
//    const actions = useActions();

//    const [product, setProduct] = useState(undefined);

//    useEffect(() => {
//       setProduct(productData.getProductBySlug(productSlug));
//    }, [productSlug]);

//    return (
//       <div
//          className={`product-view__modal ${
//             product === undefined ? "" : "active"
//          }`}
//       >
//          <div className="product-view__modal__content">
//             <ProductView product={product} />
//             <div className="product-view__modal__content__close">
//                <Button size="sm" onClick={() => actions.remove()}>
//                   đóng
//                   {/* đóng */}
//                </Button>
//             </div>
//          </div>
//       </div>
//    );
// };

// export default ProductViewModal;
