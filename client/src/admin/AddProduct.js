import {
  Box,
  Card,
  Container,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import SingleProduct from "../pages/singleProduct/SingleProduct";
import SingleView from "./SingleView";
import { Button } from "../styles/Button";
import { useDispatch } from "react-redux";
import { Create_Product } from "../app/features/HeroSection/heroSlice";

const AddProduct = () => {
  const [productTitle, setProductTitle] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [stock, setStock] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState([""]);
  const [category, setCategory] = useState("");
  const [colors, setColors] = useState("");
  const [company, setCompany] = useState("");
  const [stars, setstars] = useState("");
  const handleImageChange = (index: 0, value) => {
    const newImages = [...image];
    newImages[index] = value;
    setImage(newImages);
  };
  const dispatch = useDispatch();

  const data = {
    category,
    colors,
    company,
    description,
    image,
    name: productTitle,
    price: productPrice,
    reviews: "",
    stars,
    stock,
  };

  return (
    <Container mt="2rem" maxWidth="90%">
      <HStack>
        <Card padding="1rem" align="center" borderRadius="1rem">
          <Box width="50rem">
            <h2 style={{ textAlign: "center" }}>Add Product</h2>

            <FormControl>
              <FormLabel>Product Title</FormLabel>
              <Input
                placeholder="Product Title"
                variant="outline"
                textTransform="capitalize"
                value={productTitle}
                onChange={(e) => setProductTitle(e.target.value)}
                fontSize="1.5rem"
                rounded="1rem"
                padding="2rem"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Product Price</FormLabel>
              <Input
                placeholder="Product Price"
                type="number"
                variant="outline"
                textTransform="capitalize"
                fontSize="1.7rem"
                rounded="1rem"
                padding="2rem"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Company</FormLabel>
              <Input
                placeholder="Company"
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                textTransform="capitalize"
                fontSize="1.7rem"
                rounded="1rem"
                padding="2rem"
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Category</FormLabel>
              <Input
                placeholder="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                textTransform="capitalize"
                fontSize="1.7rem"
                rounded="1rem"
                padding="2rem"
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Stock</FormLabel>
              <Input
                placeholder="Stock"
                type="number"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                textTransform="capitalize"
                fontSize="1.7rem"
                rounded="1rem"
                padding="2rem"
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Textarea
                placeholder="Description"
                size="md"
                textTransform="capitalize"
                variant="outline"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                fontSize="1.3rem"
                rounded="2rem"
                rows="7"
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Image</FormLabel>

              <Input
                placeholder="Image Link"
                textTransform="lowercase"
                value={image[0]}
                onChange={(e) => handleImageChange(0, e.target.value)}
                size="md"
                variant="outline"
                fontSize="1.3rem"
                rounded="1rem"
                padding="2rem"
              />
            </FormControl>

            <Button
              style={{ margin: "2rem 2rem" }}
              onClick={() => dispatch(Create_Product(data))}
            >
              Add Product
            </Button>
          </Box>
        </Card>
        <Card padding="1rem" align="center" borderRadius="1rem">
          <Box
            marginLeft="6rem"
            marginBottom="23rem"
            flexDirection="column"
            justifyContent="center"
            display="flex"
            alignItems="center"
          >
            {/* Right side of the form */}
            <h2 title="Product View">Product View</h2>
            <SingleView data={data} />
          </Box>
        </Card>
      </HStack>
    </Container>
  );
};

export default AddProduct;
