import React from "react";
import PropTypes from "prop-types";

import Link from "next/link";
import Button from "./Button";

import numberWithCommas from "@/utils/numberWithCommas";
import { useActions } from "@/redux/useActions";

const ProductCard = (props) => {
   const actions = useActions();

   return (
      <div className="product-card">
         <Link href={`/catalog/${props.slug}`}>
            <div>
               <div className="product-card__image">
                  <img src={props.img01} alt="" />
                  <img src={props.img02} alt="" />
               </div>
               <h3 className="product-card__name">{props.name}</h3>
               <div className="product-card__price">
                  {numberWithCommas(props.price)}
                  <span className="product-card__price__old">
                     <del>{numberWithCommas(399000)}</del>
                  </span>
               </div>
            </div>
         </Link>
         <div className="product-card__btn">
            <Button
               size="sm"
               icon="bx bx-cart"
               animate={true}
               onClick={() => actions.set(props.slug)}
            >
               chọn mua
            </Button>
         </div>
      </div>
   );
};

ProductCard.propTypes = {
   img01: PropTypes.string.isRequired,
   img02: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   price: PropTypes.number.isRequired,
   slug: PropTypes.string.isRequired,
};

export default ProductCard;
