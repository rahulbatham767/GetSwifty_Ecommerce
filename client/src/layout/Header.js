import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to={"/"}>
        <div style={{ marginLeft: "6rem", width: "7rem" }}>
          <img
            src="/images/logo.png"
            alt="logo imae"
            className="img-fluid"
            width={50}
          />
        </div>
      </NavLink>
      <Navbar />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  height: 10rem;

  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 5rem;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
  }
`;
export default Header;
