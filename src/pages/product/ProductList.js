import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Gridview from "./Gridview";
import Listview from "./Listview";

const ProductList = () => {
  const { Filter, gridview } = useSelector((state) => state.hero);
  console.log(Filter);

  if (gridview) {
    return (
      <Wrapper>
        <Gridview filter={Filter} />
      </Wrapper>
    );
  }
  if (gridview === false) {
    return <Listview filter={Filter} />;
  }
};
const Wrapper = styled.section``;
export default ProductList;
