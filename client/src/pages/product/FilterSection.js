import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaCheck } from "react-icons/fa";
import styled from "styled-components";
import {
  Category,
  Colors,
  Company,
  FilterView,
  clearFilter,
  filtersearch,
  setFilter,
} from "../../app/features/HeroSection/heroSlice";
import { FormatPrice } from "../../additional/FormatPrice";
import { Button } from "../../styles/Button";
import { CgSearch } from "react-icons/cg";

const FilterSection = () => {
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedPrice, setSelectedPrice] = useState(0);

  const { category, company, colors, filters, minPrice, maxPrice } =
    useSelector((state) => state.hero);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Category());
    dispatch(Company());
    dispatch(Colors());
  }, [dispatch]);

  useEffect(() => {
    dispatch(filtersearch(searchText));
    dispatch(
      setFilter({
        text: searchText,
        category: selectedCategory,
        company: selectedCompany,
        color: selectedColor,
        price: selectedPrice,
      })
    );
    dispatch(
      FilterView({
        text: searchText,
        category: selectedCategory,
        company: selectedCompany,
        color: selectedColor,
        price: selectedPrice,
      })
    );
  }, [
    dispatch,
    searchText,
    selectedCategory,
    selectedCompany,
    selectedColor,
    selectedPrice,
  ]);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat === selectedCategory ? "" : cat);
  };

  const handleCompanyChange = (comp) => {
    setSelectedCompany(comp === selectedCompany ? "" : comp);
  };

  const handleColorChange = (col) => {
    setSelectedColor(col === selectedColor ? "" : col);
  };

  const handlePriceChange = (e) => {
    setSelectedPrice(parseInt(e.target.value, 10));
  };

  const handleClearFilters = () => {
    setSearchText("");
    setSelectedCategory("");
    setSelectedCompany("");
    setSelectedColor("");
    setSelectedPrice(0);
    dispatch(clearFilter());
  };

  return (
    <Wrapper>
      <div className="filter-search">
        <form onSubmit={(e) => e.preventDefault()}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px;",
            }}
            className="search-button-box"
          >
            <input
              type="text"
              name="text"
              value={searchText}
              onChange={handleSearchChange}
              className="search-button"
              placeholder="Search"
              style={{ fontSize: "13px", border: "none", boxShadow: "none" }}
            />
            <span>
              <CgSearch fontSize={"15px"} />
            </span>
          </div>
        </form>
      </div>
      <div className="filter-category">
        <h3>Category</h3>
        <div>
          {category.map((cat, id) => (
            <button
              key={id}
              type="button"
              className={cat === selectedCategory ? "active" : ""}
              onClick={() => handleCategoryChange(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      <div className="filter-company">
        <h3>Company</h3>
        <select
          name="company"
          className="filter-company--select"
          value={selectedCompany}
          onChange={(e) => handleCompanyChange(e.target.value)}
        >
          <option value="">All</option>
          {company.map((comp, index) => (
            <option key={index} value={comp}>
              {comp}
            </option>
          ))}
        </select>
      </div>
      <div className="filter-colors colors">
        <h3>Colors</h3>
        <div className="filter-color-style">
          <button
            className={selectedColor === "" ? "btnStyle active" : "btnStyle"}
            onClick={() => handleColorChange("")}
            style={{ backgroundColor: "white" }}
          >
            All
          </button>
          {colors.map((col, index) => (
            <button
              key={index}
              className={selectedColor === col ? "btnStyle active" : "btnStyle"}
              style={{ backgroundColor: col }}
              onClick={() => handleColorChange(col)}
            >
              {selectedColor === col && <FaCheck className="checkStyle" />}
            </button>
          ))}
        </div>
      </div>
      <div className="filter_price">
        <h3>Price</h3>
        <p>{FormatPrice(filters.price)}</p>
        <input
          type="range"
          name="price"
          min={minPrice}
          max={maxPrice}
          step="100"
          value={selectedPrice}
          onChange={handlePriceChange}
        />
      </div>
      <div className="filter-clear">
        <Button className="btn" onClick={handleClearFilters}>
          Clear Filters
        </Button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  .search-button-box {
    outline: 1px solid gray;
    border-radius: 10px;
  }

  h3 {
    padding: 2rem 0;
    font-size: bold;
  }

  .filter-search {
    input {
      padding: 0.6rem 1rem;
      width: 80%;
    }
    input:focus-visible {
      border: none;
      outline: none;
    }
  }

  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;

      button {
        border: none;
        background-color: ${({ theme }) => theme.colors.white};
        text-transform: capitalize;
        cursor: pointer;

        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }

      .active {
        border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  }

  .filter-company--select {
    padding: 0.3rem 1.2rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
  }

  .filter-color-style {
    display: flex;
    justify-content: center;
  }

  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    // opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1.5rem;
    color: #fff;
  }

  .filter_price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }

  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .filter-clear .btn {
    background-color: #ec7063;
    color: #000;
  }
`;
export default FilterSection;
