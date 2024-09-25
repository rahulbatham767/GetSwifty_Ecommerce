import React, { useState } from "react";
import { Link, Navigate, NavLink } from "react-router-dom";
import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu, CgClose } from "react-icons/cg";

import { useDispatch, useSelector } from "react-redux";
import { Logout } from "../app/features/HeroSection/heroSlice";

const Navbar = () => {
  const [menuIcon, setMenuIcon] = useState(false);

  const { LoggedIn, cart } = useSelector((state) => state.hero);
  const dispatch = useDispatch();
  return (
    <Nav>
      <div className={menuIcon ? "navbar active" : "navbar"}>
        <ul className="navbar-lists">
          <li>
            <NavLink
              to="/"
              className="navbar-link home"
              onClick={() => {
                setMenuIcon(false);
              }}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/product"
              className="navbar-link "
              onClick={() => {
                setMenuIcon(false);
              }}
            >
              Product
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="navbar-link "
              onClick={() => {
                setMenuIcon(false);
              }}
            >
              Contact
            </NavLink>
          </li>

          {LoggedIn ? (
            <>
              <li>
                <button
                  className="navbar-link"
                  style={{ fontSize: "2.2rem" }}
                  onClick={() => {
                    dispatch(Logout());
                    <Navigate to={"/login"} />;
                  }}
                >
                  LOGOUT
                </button>
              </li>
            </>
          ) : (
            <li>
              <Link to={"/login"}>
                <button className="navbar-link" style={{ fontSize: "2.2rem" }}>
                  LOGIN
                </button>
              </Link>
            </li>
          )}
          <li>
            <NavLink
              to="/cart"
              className="navbar-link cart-trolley--link "
              onClick={() => {
                setMenuIcon(false);
              }}
            >
              <FiShoppingCart className="cart-trolley" />
              <span className="cart-total--item">{cart.length}</span>
            </NavLink>
          </li>
        </ul>
        {/* button for open and close */}
        <div className="mobile-navbar-btn">
          <CgMenu
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={() => {
              setMenuIcon(true);
            }}
          />
          <CgClose
            name="close-outline"
            className="mobile-nav-icon close-outline"
            onClick={() => {
              setMenuIcon(false);
            }}
          />
        </div>
      </div>
    </Nav>
  );
};
const Nav = styled.nav`
  .navbar-lists {
    display: flex;
    gap: 4.5rem;
    margin-right: 2rem;
    align-items: center;

    .navbar-link {
      &:link,
      &:visited {
        display: inline-block;
        text-decoration: none;
        font-size: 1.8rem;
        font-weight: 500;
        text-transform: uppercase;
        color: #212529;
        transition: color 0.3s linear;
      }
      &:hover,
      &:active {
        color: #8490ff;
      }
    }
  }
  .mobile-navbar-btn {
    display: none;
    background-color: transparent;
    cursor: pointer;
    border: #212529;
  }
  .mobile-nav-icon[name="close-outline"] {
    display: none;
  }
  .close-outline {
    display: none;
  }
  .cart-trolley--link {
    position: relative;

    .cart-trolley {
      position: relative;
      font-size: 3.2rem;
    }
    .cart-total--item {
      width: 2.4rem;
      height: 2.4rem;
      position: absolute;
      background-color: #000;
      color: #000;
      border-radius: 50%;
      display: grid;
      place-items: center;
      top: -20%;
      left: 70%;
      background-color: #8490ff;
    }
  }
  .user-login--name {
    text-transform: capitalize;
  }
  .user-logout,
  .user-login {
    font-size: 1.4rem;
    padding: 0.8rem 1.4rem;
  }
  @media (max-width: 768px) {
    .mobile-navbar-btn {
      display: inline-block;
      z-index: 9999;
      border: #212529;

      .mobile-nav-icon {
        font-size: 4.2rem;
        color: #212529;
      }
    }

    .active .mobile-nav-icon {
      display: none;
      font-size: 4.2rem;
      position: absolute;
      top: 30%;
      right: 10%;
      color: #212529;
      z-index: 9999;
    }
    .active .close-outline {
      display: inline-block;
    }
    .navbar-lists {
      width: 100vw;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
      background-color: #fff;

      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      visibility: hidden;
      opacity: 0;
      transform: translateX(100%);
      transition: all 3s linear;
    }
    .active .navbar-lists {
      visibility: visible;
      opacity: 1;
      transform: translateX(0);
      z-index: 999;
      transform-origin: right;
      transition: all 3s linear;

      .navbar-link {
        font-size: 4.2rem;
      }
    }
    .cart-trolley--link {
      position: relative;

      .cart-trolley {
        position: relative;
        font-size: 5.2rem;
      }

      .cart-total--item {
        width: 4.2rem;
        height: 4.2rem;
        font-size: 2rem;
      }
    }

    .user-logout,
    .user-login {
      font-size: 2rem;
      padding: 0.8rem 1.4rem;
    }
  }
`;
export default Navbar;
