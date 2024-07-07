import React, { useState } from "react";
import Styled from "styled-components";
const MyImage = ({ imgs, name }) => {
  console.log(imgs);
  const [images, setImage] = useState("");
  console.log(images);
  // Check if imgs is an array
  if (!Array.isArray(imgs)) {
    console.error("imgs prop must be an array");
    return null; // or display an error message, or return a default component
  }
  return (
    <>
      <Wrapper>
        <div className="grid grid-three-row card">
          {imgs.map((elem, index) => {
            return (
              <figure key={index}>
                <img
                  src={elem}
                  alt={name}
                  className="box-image--style"
                  onClick={() => {
                    setImage(elem);
                  }}
                  onMouseEnter={() => {
                    setImage(elem);
                  }}
                />
              </figure>
            );
          })}
        </div>
        <div className="main-screen">
          {images === "" ? (
            <img src={imgs[0]} alt={name} />
          ) : (
            <img src={images} alt={name} />
          )}
        </div>
      </Wrapper>
    </>
  );
};
const Wrapper = Styled.section`  display: grid;
grid-template-columns: 0.4fr 1fr;
gap: 1rem;

.grid {
  flex-direction: row;
  justify-items: center;
  align-items: center;
  width: 100%;
  gap: 1rem; 
  padding: 0.5rem;
  border-radius:10px;
  /* order: 2; */

figure{
padding-bottom:1.5rem;
border-bottom: 1px solid gray;
}

  img {
    max-width: 100%;
    max-height: 100%;
    background-size: cover;
    object-fit: contain;
    cursor: pointer;
    
  }
}

.main-screen {
  display: grid;
  margin-right: 10px;
  place-items: center;
  order: 1;
  img {
    max-width: 200px;
    height: auto;
    
  }
}
.grid-four-column {
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 1fr);
}

@media (max-width: ${({ theme }) => theme.media.mobile}) {
  display: flex;
  flex-direction: column;
  order: 1;

  .grid-four-column {
    grid-template-rows: 1fr;
    grid-template-columns: repeat(4, 1fr);
  }
}`;
export default MyImage;
