import React from "react";
import {  NavLink } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Button } from "../../styles/Button";

const HeroSection = () => {
  const data = useSelector((state) => state.hero.heading);
  console.log(data);

  return (
    <>
      <Wrapper>
        <HeroBanner>
          <img src="/images/electronic1.jpg" alt="Electronic" />
        </HeroBanner>
        <div className="container">
          <div className="grid grid-two-column gap-2">
            <div className="image-container">
              <img src="/images/man.avif" alt="Man" className="hero-image" />
            </div>
            <div className="hero-section-data">
              <p className="intro-data">Welcome to</p>
              <h1>GetSwifty Ecommerce</h1>
              <p>
                Welcome to our online shopping destination, where convenience
                meets an extensive array of products just a click away! Our
                product-based e-commerce website is designed to offer a seamless
                and enjoyable shopping experience for our valued customers.
              </p>
              <NavLink to="/product">
                <Button style={{ fontSize: "12px" }}>Shop Now</Button>
              </NavLink>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

const HeroBanner = styled.div`
  width: 100%;
  height: 400px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Wrapper = styled.section`
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }

  .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .hero-image {
    width: auto;
    height: 300px;
  }

  .hero-section-data {
    p {
      margin: 2rem 0;
    }

    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }

    .intro-data {
      margin-bottom: 0;
    }
  }

  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  figure {
    position: relative;

    &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color: rgba(81, 56, 238, 0.4);
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }

  .img-style {
    width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    .grid {
      gap: 10rem;
    }

    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;

export default HeroSection;
