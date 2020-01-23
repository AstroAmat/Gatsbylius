import React from "react";
import PropTypes from "prop-types";
import { FiShoppingCart } from "react-icons/fi";
import {
  useStoreDispatchContext,
  useStoreStateContext,
} from "../../context/StoreContext";
import { addVariantToCart } from "./../../services/cart";
import { AddToCartButton as StyledAddToCartButton } from "./styled";

const AddToCartButton = ({ slug, variantsCode, qty, isSimple }) => {
  const storeState = useStoreStateContext();
  const storeDispatch = useStoreDispatchContext();
  return (
    <StyledAddToCartButton
      onClick={() => {
        addVariantToCart(
          slug,
          variantsCode,
          qty,
          isSimple,
          storeState,
          storeDispatch
        ).then(() => {});
      }}
    >
      <FiShoppingCart size="1.2em" />
      <span>Add to cart</span>
    </StyledAddToCartButton>
  );
};

AddToCartButton.propTypes = {
  slug: PropTypes.string,
  variantsCode: PropTypes.string,
  qty: PropTypes.number,
  isSimple: PropTypes.bool,
};

export default AddToCartButton;
