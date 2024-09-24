import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  FilterData,
  FilterView,
} from "../../app/features/HeroSection/heroSlice";
import FilterSection from "./FilterSection";
import Sort from "./Sort";
import ProductList from "./ProductList";
const Products = () => {
  const Dispatch = useDispatch();

  useEffect(() => {
    Dispatch(FilterView());
  }, [Dispatch]);

  return (
    <Wrapper>
      <div className="container grid grid-filter-column">
        <div>
          <FilterSection />
        </div>
        <section className="product-view--sort">
          <div className="sort-filter">
            <Sort />
          </div>
          <div className="main-product">
            <ProductList />
          </div>
        </section>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Products;
