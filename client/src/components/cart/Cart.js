import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useEffect, useMemo } from "react";
import { NavLink } from "react-router-dom";
import CartItem from "./CartItem";
import { Button } from "../../styles/Button";
import { clearCart } from "../../app/features/HeroSection/heroSlice";
import { Box, Heading, Text, VStack, HStack } from "@chakra-ui/react";
import { FormatPrice } from "../../additional/FormatPrice";
import { toast } from "react-toastify";

const Cart = () => {
  const { cart, loggedIn } = useSelector((state) => state.hero);
  const dispatch = useDispatch();
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  const subtotal = useMemo(() => {
    return cart.reduce((total, item) => total + item.price * item.amount, 0);
  }, [cart]);

  const checkout = () => {
    if (!loggedIn) {
      toast.error("Checkout Functionality is not Available Right Now", {
        style: { fontSize: "13px" },
      });
    }
  };

  const formattedSubtotal = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(subtotal);

  if (cart.length === 0 || cart.length === null) {
    return (
      <div
        style={{
          textAlign: "center",
          marginTop: "10rem",
          display: "block",
        }}
      >
        <h2>No Item In Cart</h2>
      </div>
    );
  }

  return (
    <Wrapper style={{ width: "135rem" }} className="mx-auto">
      <HStack>
        <div>
          <div className="cart_heading grid grid-five-column">
            <p>Item</p>
            <p className="cart-hide">Price</p>
            <p>Quantity</p>
            <p className="cart-hide">Subtotal</p>
            <p>Remove</p>
          </div>
          <hr />
          <div className="cart-item">
            {cart.map((elem) => {
              return <CartItem key={elem.id} elem={elem} />;
            })}
          </div>

          <Box></Box>

          <hr />
          <div className="cart-two-button">
            <NavLink to={"/product"}>
              <Button>CONTINUE SHOPPING</Button>
            </NavLink>
            <NavLink
              onClick={() => {
                dispatch(clearCart());
              }}
            >
              <Button className="btn btn-clear">CLEAR CART</Button>
            </NavLink>
          </div>
        </div>
        <VStack
          style={{
            marginRight: "2rem",
            marginBottom: "12rem",
            marginLeft: "4rem",
            alignItems: "unset",
          }}
        >
          <Heading as={"h3"} fontSize={"3rem"} marginBottom={"3rem"}>
            Order summary
          </Heading>
          <HStack justifyContent={"space-between"} alignItems={"baseline"}>
            <Text as={"h2"} fontSize={"sm"} alignItems={"flex-start"}>
              Sub total
            </Text>
            <Text as={"h2"} marginLeft={"6rem"} fontSize={"sm"}>
              {FormatPrice(cart[0].price)}
            </Text>
          </HStack>
          <HStack alignItems={"start"}>
            <VStack justifyContent={"space-between"} alignItems={"baseline"}>
              <Heading as={"h3"} fontSize={"sm"}>
                <Box>Total</Box>
              </Heading>
              <Text fontStyle={"italic"}>(Inclusive of tax ₹0.00)</Text>
            </VStack>
            <Text fontStyle={"italic"}>{formattedSubtotal}</Text>
          </HStack>
          <Button className="w-100" onClick={checkout}>
            Checkout
          </Button>
        </VStack>
      </HStack>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;

  .grid-four-column {
    grid-template-columns: repeat(4, 1fr);
  }

  .grid-five-column {
    grid-template-columns: repeat(4, 1fr) 0.3fr;
    text-align: center;
    align-items: center;
  }
  .cart-heading {
    text-align: center;
    text-transform: uppercase;
  }
  hr {
    margin-top: 1rem;
  }
  .cart-item {
    padding: 3.2rem 0;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }

  .cart-user--profile {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1.2rem;
    margin-bottom: 5.4rem;

    img {
      width: 8rem;
      height: 8rem;
      border-radius: 50%;
    }
    h2 {
      font-size: 2.4rem;
    }
  }
  .cart-user--name {
    text-transform: capitalize;
  }
  .cart-image--name {
    /* background-color: red; */
    align-items: center;
    display: grid;
    gap: 1rem;
    grid-template-columns: 0.4fr 1fr;
    text-transform: capitalize;
    text-align: left;
    img {
      max-width: 5rem;
      height: 5rem;
      object-fit: contain;
      color: transparent;
    }

    .color-div {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 1rem;

      .color-style {
        width: 1.4rem;
        height: 1.4rem;

        border-radius: 50%;
      }
    }
  }

  .cart-two-button {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;

    .btn-clear {
      background-color: #e74c3c;
    }
  }

  .amount-toggle {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.4rem;
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

  .remove_icon {
    font-size: 1.6rem;
    color: #e74c3c;
    cursor: pointer;
  }

  .order-total--amount {
    width: 100%;
    margin: 4.8rem 0;
    text-transform: capitalize;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;

    .order-total--subdata {
      border: 0.1rem solid #f0f0f0;
      display: flex;
      flex-direction: column;
      gap: 1.8rem;
      padding: 3.2rem;
    }
    div {
      display: flex;
      gap: 3.2rem;
      justify-content: space-between;
    }

    div:last-child {
      background-color: #fafafa;
    }

    div p:last-child {
      font-weight: bold;
      color: rgb(24 24 29);
    }
  }

  @media (max-width: 768px) {
    .grid-five-column {
      grid-template-columns: 1.5fr 1fr 0.5fr;
    }
    .cart-hide {
      display: none;
    }

    .cart-two-button {
      margin-top: 2rem;
      display: flex;
      justify-content: space-between;
      gap: 2.2rem;
    }

    .order-total--amount {
      width: 100%;
      text-transform: capitalize;
      justify-content: flex-start;
      align-items: flex-start;

      .order-total--subdata {
        width: 100%;
        border: 0.1rem solid #f0f0f0;
        display: flex;
        flex-direction: column;
        gap: 1.8rem;
        padding: 3.2rem;
      }
    }
  }
`;

export default Cart;
