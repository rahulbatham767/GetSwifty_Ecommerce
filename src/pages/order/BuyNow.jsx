import React, { useState } from "react";

import {
  Box,
  HStack,
  VStack,
  FormControl,
  FormLabel,
  Card,
  Center,
  Image,
  Input,
  Badge,
  Textarea,
  Text,
  Button as Btn,
  Select,
  Heading,
  CardBody,
  Toast,
} from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../styles/Button";
import { FormatPrice } from "../../additional/FormatPrice";
import {
  BuyNow_thunk,
  ClearCheckout,
} from "../../app/features/HeroSection/heroSlice";
import { buynow } from "../../app/features/HeroSection/Api";
import ShowRazorPay from "../payment/ShowRazorPay";
const BuyNow = () => {
  const Dispatch = useDispatch();

  const { addTocart, LoggedUser, productDetails } = useSelector(
    (state) => state.hero
  );
  const [value, setValue] = useState("1");

  const indianStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry",
  ];
  const { id, color, amount, product } = addTocart;
  console.log("product", product);
  const [shippingAddress, setShippingAddress] = useState({
    state: "",
    city: "",
    zip: "",
    street: "",
  });
  const [data, setData] = useState({
    user: productDetails.name || "",
    userId: productDetails._id || "",
    productId: productDetails._id || "",
    quantity: value,
    totalPrice: amount,
    fname: "",
    lname: "",
    phone: "",
    shippingAddress,
  });

  const navigate = useNavigate();
  const onChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setData({
      ...data,
      [name]: value,
    });
  };
  const dispatch = useDispatch();
  const checkout = async () => {
    const formData = {
      user: product._id,
      userId: LoggedUser.user._id,
      productId: product._id,
      quantity: amount,
      totalPrice: product.price * amount,
      fname: data.fname,
      lname: data.lname,
      phone: data.phone,
      shippingAddress,
    };
    dispatch(BuyNow_thunk(formData));
    navigate("/");
  };

  return (
    <Center>
      <HStack
        justifyContent="start"
        alignItems="start"
        marginTop="2rem"
        spacing={10}
      >
        <Box>
          <Heading as="h5" size="sm">
            Billing details
          </Heading>
          <VStack spacing={4} alignItems={"flex-start"}>
            <HStack>
              <FormControl isRequired>
                <FormLabel>First name</FormLabel>
                <Input
                  width="100"
                  type="text"
                  name="fname"
                  padding="2rem"
                  onChange={onChange}
                  fontSize="sm"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Last name</FormLabel>
                <Input
                  type="text"
                  name="lname"
                  fontSize="sm"
                  onChange={onChange}
                  padding="2rem"
                />
              </FormControl>
            </HStack>
            <FormControl isRequired>
              <FormLabel>State</FormLabel>
              <Select
                name="state"
                size={"md"}
                height={"5rem"}
                value={shippingAddress.state}
                onChange={(e) => {
                  setShippingAddress({
                    ...shippingAddress,
                    state: e.target.value,
                  });
                }}
                fontSize={"16px"}
              >
                <option value="">Select a state</option>
                {indianStates.map((item, id) => (
                  <option key={id} value={item}>
                    {item}
                  </option>
                ))}
              </Select>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Street Address</FormLabel>
              <Input
                type="text"
                name="street"
                placeholder="House number and street name"
                padding="2rem"
                fontSize="sm"
                textTransform="capitalize"
                marginBottom="3"
                onChange={(e) => {
                  setShippingAddress({
                    ...shippingAddress,
                    street: e.target.value,
                  });
                }}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Town / City</FormLabel>
              <Input
                type="text"
                padding="2rem"
                name="city"
                fontSize="sm"
                onChange={(e) => {
                  setShippingAddress({
                    ...shippingAddress,
                    city: e.target.value,
                  });
                }}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Postcode / ZIP</FormLabel>
              <Input
                type="number"
                padding="2rem"
                name="zip"
                fontSize="sm"
                onChange={(e) => {
                  setShippingAddress({
                    ...shippingAddress,
                    zip: e.target.value,
                  });
                }}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Phone</FormLabel>
              <Input
                type="tel"
                padding="2rem"
                name="number"
                fontSize="sm"
                onChange={(e) => {
                  setData({
                    ...data,
                    phone: e.target.value,
                  });
                }}
              />
            </FormControl>
          </VStack>
        </Box>
        <Box>
          <Card display="flex" flexDirection="row" width="600px" padding="1rem">
            <Box width="300px">
              {product && product.image && (
                <Image
                  src={product.image[0]}
                  alt={product.name}
                  objectFit="cover"
                />
              )}
            </Box>
            <CardBody>
              <Box display="flex" justifyContent="space-between">
                <Heading size="sm">{product.name}</Heading>
              </Box>
              <Box
                borderRadius="full"
                backgroundColor={color}
                width="10px"
                height="10px"
              />
              <Text fontSize="sm">
                Price: <strike>{FormatPrice(product.price + 250000)}</strike>
                {"   "} {FormatPrice(product.price)}
              </Text>
              <Text fontSize="sm">
                <b>Quantity:</b> {amount}
              </Text>{" "}
              <Text fontSize="sm">
                <b>Company:</b> {product.company}
              </Text>{" "}
              <Text fontSize="sm">
                <b> SubTotal:</b>
                {FormatPrice(product.price)}
              </Text>
              <Text fontSize="sm">
                <b> Total:</b>
                {FormatPrice(product.price * amount)}
              </Text>
              <Button
                variant="ghost"
                colorScheme="blue"
                style={{ marginTop: "2rem" }}
                onClick={checkout}
              >
                Checkout
              </Button>
            </CardBody>
          </Card>
        </Box>
      </HStack>
    </Center>
  );
};

export default BuyNow;
