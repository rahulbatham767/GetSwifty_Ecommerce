import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { sorting } from "../app/features/HeroSection/heroSlice";

const AdminSort = ({ currentPageData }) => {
  const dispatch = useDispatch();

  return (
    <Wrapper className="sort-section">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="product-data" style={{ marginRight: "1rem" }}>
          {currentPageData.length} Products Available
        </div>
        <div className="sort-selection">
          <form action="#">
            <label htmlFor="sort" className="sort"></label>
            <select
              name="sort"
              id="sort"
              className="sort-selection--style"
              onChange={(e) => dispatch(sorting(e.target.value))}
            >
              <option value="z-a" selected>
                All
              </option>
              <option value="#" disabled></option>
              <option value="lowest">Price(lowest)</option>
              <option value="#" disabled></option>
              <option value="highest">Price(highest)</option>
              <option value="#" disabled></option>
              <option value="a-z">Price(a-z)</option>
              <option value="#" disabled></option>
              <option value="z-a">Price(z-a)</option>
              <option value="#" disabled></option>
            </select>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;

  align-items: center;
  .sorting-list--grid {
    display: flex;
    gap: 2rem;

    .sort-btn {
      padding: 0.8rem 1rem;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    .icon {
      font-size: 1.6rem;
    }
    .active {
      background-color: ${({ theme }) => theme.colors.black};
      color: #fff;
    }
  }

  .sort-selection--style {
    padding: 0.5rem;
    cursor: pointer;
  }

  .sort-selection--style option {
    padding: 0.5rem 0;
    cursor: pointer;
    height: 2rem;
    padding: 10px;
  }
`;

export default AdminSort;
