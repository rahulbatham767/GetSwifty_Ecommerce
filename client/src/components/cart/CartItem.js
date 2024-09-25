import React from "react";
import { FaTrash } from "react-icons/fa";
import CartAmountToggle from "./CartAmountToggle";
import { useDispatch } from "react-redux";
import { FormatPrice } from "../../additional/FormatPrice";
import { removeItem } from "../../app/features/HeroSection/heroSlice";

const CartItem = ({ elem }) => {
  const { id, name, image, color, price, amount } = elem;

  // const { cart } = useSelector((state) => state.hero);

  const dispatch = useDispatch();

  console.log(FormatPrice(price));

  return (
    <>
      <div className="cart_heading grid grid-five-column">
        <div className="cart-image--name">
          <div>
            <figure>
              <img src={image} alt={id} />
            </figure>
          </div>
          <div>
            <p>{name}</p>
            <div className="color-div">
              <p>color:</p>
              <div
                className="color-style"
                style={{ backgroundColor: color, color: color }}
              ></div>
            </div>
          </div>
        </div>
        {/* price   */}
        <div className="cart-hide">
          <p>{FormatPrice(price)}</p>
        </div>

        {/* Quantity  */}
        <CartAmountToggle amount={amount} id={id} key={id} />

        {/* //Subtotal */}
        <div className="cart-hide">
          <p>{FormatPrice(price * amount)}</p>
        </div>

        <div>
          <FaTrash
            className="remove_icon"
            onClick={() => dispatch(removeItem(id))}
          />
        </div>
      </div>
    </>
  );
};

export default CartItem;
