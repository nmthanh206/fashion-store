import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import numberWithCommas from "@/utils/numberWithCommas";
import { useActions } from "@/redux/useActions";

const CartItem = (props) => {
   const actions = useActions();

   const itemRef = useRef(null);

   const [item, setItem] = useState(props.item);
   const [quantity, setQuantity] = useState(props.item.quantity);

   useEffect(() => {
      setItem(props.item);
      setQuantity(props.item.quantity);
   }, [props.item]);

   const updateQuantity = (opt) => {
      if (opt === "+") {
         actions.updateItem({ ...item, quantity: quantity + 1 });
      }
      if (opt === "-") {
         actions.updateItem({
            ...item,
            quantity: quantity - 1 === 0 ? 1 : quantity - 1,
         });
      }
   };

   const removeCartItem = () => {
      actions.removeItem(item);
   };

   return (
      <div className="cart__item" ref={itemRef}>
         <div className="cart__item__image">
            <img src={item.product.image01} alt="" />
         </div>
         <div className="cart__item__info">
            <div className="cart__item__info__name">
               <Link href={`/catalog/${item.slug}`}>
                  {`${item.product.title} - ${item.color} - ${item.size}`}
               </Link>
            </div>
            <div className="cart__item__info__price">
               {numberWithCommas(item.price)}
            </div>
            <div className="cart__item__info__quantity">
               <div className="product__info__item__quantity">
                  <div
                     className="product__info__item__quantity__btn"
                     onClick={() => updateQuantity("-")}
                  >
                     <i className="bx bx-minus"></i>
                  </div>
                  <div className="product__info__item__quantity__input">
                     {quantity}
                  </div>
                  <div
                     className="product__info__item__quantity__btn"
                     onClick={() => updateQuantity("+")}
                  >
                     <i className="bx bx-plus"></i>
                  </div>
               </div>
            </div>
            <div className="cart__item__del">
               <i className="bx bx-trash" onClick={() => removeCartItem()}></i>
            </div>
         </div>
      </div>
   );
};

CartItem.propTypes = {
   item: PropTypes.object,
};

export default CartItem;
