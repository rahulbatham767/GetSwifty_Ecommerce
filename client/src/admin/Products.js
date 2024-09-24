import React, { useEffect, useState } from "react";

import { FormatPrice } from "../additional/FormatPrice";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { SearchIcon } from "@chakra-ui/icons";
import { Input, Box, Tooltip } from "@chakra-ui/react";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactPaginate from "react-paginate";
import { useDispatch } from "react-redux";
import AdminSort from "./AdminSort";
import UpdateModal from "./UpdateModal";
import {
  Delete_Product,
  FilterData,
  getData,
  sorting,
} from "../app/features/HeroSection/heroSlice";
const AdminProducts = () => {
  // Assuming state.hero contains an array of product data
  const { Filter, data } = useSelector((state) => state.hero);
  const [currentPage, setCurrentPage] = useState(0);
  const productsPerPage = 9;
  const pageCount = Math.ceil(Filter.length / productsPerPage);
  const offset = currentPage * productsPerPage;
  const currentPageData = Filter.slice(offset, offset + productsPerPage);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
    // Fetch data for the new page or update displayed content
  };
  const dispatch = useDispatch();

  const delete_product = (id) => {
    dispatch(Delete_Product(id));
    dispatch(FilterData());
    dispatch(getData());
  };
  const onchange = (e) => {
    dispatch(sorting(e.target.value));
  };
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);
  return (
    <Wrapper className="section container">
      <Box
        marginBottom="4rem"
        alignItems="center"
        display="flex"
        justifyContent="space-between"
      >
        <Box
          className="search-box"
          borderRadius="1.5rem"
          boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
          alignItems="center"
          display="flex"
        >
          <Tooltip hasArrow label="Search Product" bg="gray.300" color="black">
            <SearchIcon fontSize="2.2rem" marginLeft="1rem" />
          </Tooltip>

          <Input
            placeholder="Search Product"
            variant="unstyled"
            onChange={onchange}
            size="sm"
            padding="0.6rem"
            border="none"
            boxShadow="none"
          />
        </Box>
        <Box className="filter-product" fontSize="2rem">
          <AdminSort currentPageData={currentPageData} />
        </Box>
      </Box>
      <div className="container grid grid-three-column">
        {currentPageData.map((elem) => (
          <div className="card" key={elem._id}>
            <figure>
              <img src={elem.image} alt={elem.name} />
              <figcaption className="caption">{elem.category}</figcaption>
            </figure>
            <div className="card-data">
              <div className="card-data-flex">
                <h3>{elem.name}</h3>
                <p className="card-data--price">{FormatPrice(elem.price)}</p>
              </div>
            </div>
            <div className="crud-detail" style={{ margin: "2rem" }}>
              <UpdateModal id={elem._id} elem={elem} />
              <Button onClick={() => delete_product(elem._id)}>
                <span>
                  <FontAwesomeIcon icon={faTrashCan} />
                </span>
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className="page-div">
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          pageCount={pageCount}
          onPageChange={handlePageChange}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  .grid-three-column {
    grid-template-columns: repeat(3, 1fr);
  }
 
  .page-div{
    display:flex;
    justify-content: flex-end;
  }

.pagination {
    display: flex;
  
    margin: 2rem 0;
    font-size: 2rem;
    
    width:fit-content;
    list-style: none;
    padding: 0;
  }
  
  .pagination li {
    margin-right: 1rem;background: rgb(98 84 243);
    padding:1rem
  }
  
  .pagination a {
    text-decoration: none;
    color: white;
    padding: 0.5rem 1rem;
    border: 1px solid white;
    border-radius: 0.25rem;
    transition: background 0.3s;
  }
  
  .pagination a:hover {
    background: white;
    color: blue;
  }
  }
  .container {
    max-width: 120rem;
  }
  .crud-detail {
    display: flex;
    justify-content: space-evenly;
  }
  .grid {
    gap: 3.2rem;
    display: grid;
  }

  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }
  }

  .card {
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;

    .card-data {
      padding: 0 1rem;
    }

    .card-data-flex {
      margin: 2rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .card-data--price {
      color: ${({ theme }) => theme.colors.helper};
    }

    h3 {
      color: ${({ theme }) => theme.colors.text};
      text-transform: capitalize;
    }

    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        background-color: rgb(98 84 243);
      }

      &:hover a {
        color: #fff;
      }
      a {
        color: rgb(98 84 243);
        font-size: 1.4rem;
      }
    }
  }
`;
export default AdminProducts;
