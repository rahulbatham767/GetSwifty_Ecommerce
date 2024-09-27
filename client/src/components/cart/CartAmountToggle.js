import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
  setDecrease,
  setIncrease,
} from "../../app/features/HeroSection/heroSlice";

const CartAmountToggle = ({ amount, id }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="cart-button">
        <div className="amount-toggle">
          <button onClick={() => dispatch(setDecrease(id))}>
            <FaMinus />
          </button>
          <div className="amount-style">
            <p>{amount}</p>
          </div>
          <button onClick={() => dispatch(setIncrease(id))}>
            <FaPlus />
          </button>
        </div>
      </div>
    </>
  );
};

export default CartAmountToggle;
