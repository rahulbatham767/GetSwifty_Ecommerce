import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import PageNavigation from "./PageNavigation";
import MyImage from "./MyImage";
import { TbReplace, TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { singleproduct } from "../../app/features/HeroSection/heroSlice";
import { FormatPrice } from "../../additional/FormatPrice";
import Star from "./Star";
import AddToCart from "./AddToCart";
import { Text } from "@chakra-ui/react";
export const SingleProduct = () => {
  const param = useParams();
  console.log(param);

  const id = param.id;

  const Dispatch = useDispatch();
  const { productDetails } = useSelector((state) => state.hero);
  const {
    category,
    colors,
    company,
    description,
    image,
    name,
    price,
    reviews,
    star,
    stock,
  } = productDetails;
  console.log(productDetails);
  useEffect(() => {
    Dispatch(singleproduct(id));
  }, [Dispatch, id]);
  return (
    <Wrapper>
      <PageNavigation title={id} />
      <div className="container">
        <div className="grid grid-two-column">
          <div className="product-images">
            <MyImage imgs={image} name={name} />
          </div>
          <div className="product-data">
            <Text as="h3">{name}</Text>
            <div>
              <Star star={star} review={reviews} />
            </div>

            <p className="product-data-price">
              MRP:
              <del>{FormatPrice(price + 250000)}</del>
            </p>
            <p className="product-data-price product-data-real-price">
              Deal of the Day:{FormatPrice(price)}
            </p>
            <p>{description}</p>
            <div className="product-data-warranty">
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Free Delivery</p>
              </div>
              <div className="product-warranty-data">
                <TbReplace className="warranty-icon" />
                <p>30 Days Replacement</p>
              </div>
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Eswifty Delievery</p>
              </div>
              <div className="product-warranty-data">
                <MdSecurity className="warranty-icon" />
                <p>Free Delivery</p>
              </div>
            </div>
            <div className="product-data-info">
              <p>
                Available:{" "}
                <span> {stock > 0 ? "In Stock" : "Not Available"}</span>
              </p>
              <p>
                ID: <span> {id}</span>
              </p>
              <p>
                Brands: <span> {company}</span>
              </p>
            </div>
            <hr />
            {stock > 0 && <AddToCart product={productDetails} />}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
  }
  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;

export default SingleProduct;
