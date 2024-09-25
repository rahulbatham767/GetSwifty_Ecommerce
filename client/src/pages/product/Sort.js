import React from "react";
import styled from "styled-components";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";

import { gridviews, sorting } from "../../app/features/HeroSection/heroSlice";

const Sort = () => {
  const { gridview, Filter } = useSelector((state) => state.hero);

  const dispatch = useDispatch();

  return (
    <Wrapper className="sort-section">
      <div className="sorting-list--grid">
        <button
          className={gridview ? "sort-btn active" : "sort-btn"}
          onClick={() => {
            dispatch(gridviews(true));
          }}
        >
          <BsFillGridFill className="icon" />
        </button>
        <button
          className={!gridview ? "sort-btn active" : "sort-btn"}
          onClick={() => {
            dispatch(gridviews(false));
          }}
        >
          <BsList className="icon" />
        </button>
      </div>
      <div className="product-data">
        <p> {Filter.length} Products Available</p>
      </div>
      <div className="sort-selection">
        <form action="#">
          <label htmlFor="sort" className="sort"></label>
          <select
            name="sort"
            id="sort"
            style={{ fontSize: "1.7rem" }}
            className="sort-selection--style"
            onChange={(e) => dispatch(sorting(e.target.value))}
          >
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
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;

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
      background-color: #212529;
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

export default Sort;
