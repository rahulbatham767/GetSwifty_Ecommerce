import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import CartAmountToggle from "../../components/cart/CartAmountToggle";

import { Button } from "../../styles/Button";
import {
  AddToCartbuy,
  checkout,
  ToastSet,
} from "../../app/features/HeroSection/heroSlice";
const AddToCart = ({ product }) => {
  const { id, colors, amount } = product;
  const [color, setColor] = useState(colors[0]);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <div className="colors">
        Colors:
        {colors.map((curColor, index) => {
          return (
            <button
              key={index}
              style={{ backgroundColor: curColor }}
              className={color === curColor ? "btnStyle active" : "btnStyle"}
              onClick={() => setColor(curColor)}
            >
              {color === curColor ? <FaCheck /> : null}
            </button>
          );
        })}
      </div>
      {/* Add To Cart */}

      <CartAmountToggle amount={amount} id={id + color} />

      <NavLink
        to="/cart"
        onClick={() => dispatch(AddToCartbuy({ id, color, amount, product }))}
      >
        <Button className="btn">Add To Cart</Button>
      </NavLink>
      <NavLink
        to="/buynow"
        style={{ marginLeft: "2rem" }}
        onClick={() => {
          dispatch(
            checkout(
              {
                id,
                color,
                amount,
                product,
                toast: "Checkout Functionality is not Available",
                status: "warning",
              },
              ToastSet({})
            )
          );
        }}
      >
        <Button className="btn">Buy Now</Button>
      </NavLink>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }

  /* we can use it as a global one too  */
  .amount-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }

    .amount-style {
      font-size: 2.4rem;
      color: rgb(98 84 243);
    }
  }
`;
export default AddToCart;
