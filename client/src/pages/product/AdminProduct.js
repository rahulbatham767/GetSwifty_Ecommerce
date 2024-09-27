import React from "react";
import { NavLink } from "react-router-dom";
import { FormatPrice, NameSlice } from "../../additional/FormatPrice";

const Product = (elem) => {
  const { _id, name, image, price, category } = elem;
  console.log(elem);

  return (
    <NavLink to={`/singleproduct/${_id}`}>
      <div className="card">
        <figure>
          <img src={image} alt={name} />
          <figcaption className="caption">{category}</figcaption>
        </figure>
        <div className="card-data">
          <div className="card-data-flex">
            <h3 className="mr-3">{NameSlice(name)}</h3>
            <p className="card-data--price">{FormatPrice(price)}</p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Product;
