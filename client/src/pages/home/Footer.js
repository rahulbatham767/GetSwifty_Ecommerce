import React from "react";
import styled from "styled-components";
import { Button } from "../../styles/Button";
import { NavLink } from "react-router-dom";
import { FaInstagram, FaDiscord, FaYoutube } from "react-icons/fa";
import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
const Wrapper = styled.section`
  .iSIFGq {
    margin: 0;
  }

  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: #f6f8fa;
    border-radius: 1rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    transform: translateY(50%);

    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }

  footer {
    padding: 14rem 0 9rem 0;
    background-color: #0a1435;
    h3 {
      color: #ffffff;
      margin-bottom: 2.4rem;
    }
    p {
      color: #fff;
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid #fff;

        .icons {
          color: #fff;
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
  }

  .footer-bottom--section {
    padding-top: 9rem;

    hr {
      margin-bottom: 2rem;
      color: #ffffff;
      height: 0.1px;
    }
  }

  @media (max-width: 768px) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;

      .grid div:last-child {
        justify-self: center;
      }
    }

    footer {
      padding: 9rem 0 9rem 0;
    }

    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }
`;
const Footer = () => {
  const { LoggedIn } = useSelector((state) => state.hero);

  return (
    <Wrapper>
      {" "}
      {!LoggedIn ? (
        <section className="contact-short">
          <div className="grid grid-two-column">
            <div>
              <h3>Ready To get started?</h3>
              <h3>Talk to us Today</h3>
            </div>
            <div>
              <NavLink to={"/product"}>
                <Button className="btn hireme-btn">GET STARTED</Button>
              </NavLink>
            </div>
          </div>
        </section>
      ) : (
        ""
      )}
      <footer>
        <div className="grid grid-four-column" style={{ marginLeft: "2rem" }}>
          <div className="footer-about">
            <h3>GetSwifty </h3>
            <p>
              Welcome to our online shopping destination, where convenience
              meets an extensive array of products just a click away! Our
              product-based e-commerce website is designed to offer a seamless
              and enjoyable shopping experience for our valued customers.
            </p>
          </div>
          <div className="footer-subscribe">
            <form>
              <h3>Subscribe to get important updates</h3>
              <Box display={"flex"} alignItems={"end"}>
                <Box>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter Your Email"
                    style={{ fontSize: "11px" }}
                  />
                </Box>
                <Box>
                  <input type="submit" value="Subscribe" />
                </Box>
              </Box>
            </form>
          </div>
          <div className="footer-social">
            <h3>Follow Us</h3>
            <div className="footer-social--icons">
              <div>
                <FaDiscord className="icons" />
              </div>
              <div>
                <FaInstagram className="icons" />
              </div>
              <div>
                <FaYoutube className="icons" />
              </div>
            </div>
          </div>
          <div className="footer-content">
            <h3>Call Us</h3>
            <h3>+918878720xxx</h3>
          </div>
        </div>
        <div className="footer-bottom--section">
          <hr />
          <div className="container grid grid-two-column">
            <p>@{new Date().getFullYear()} GetSwifty-All Right Reserved.</p>
            <div>
              <p>Privacy Policy</p>
              <p>Terms and Condition</p>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

export default Footer;
