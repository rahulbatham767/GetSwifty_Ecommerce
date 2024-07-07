import React, { useEffect } from "react";
import {
  Box,
  Heading,
  Container,
  Table,
  Input,
  Thead,
  Select,
  Tbody,
  Text,
  extendTheme,
  Tr,
  Checkbox,
  Th,
  Td,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Order } from "../app/features/HeroSection/heroSlice";
const AdminOrder = () => {
  const { orders } = useSelector((state) => state.hero);

  const theme = extendTheme({
    components: {
      Input: {
        baseStyle: {
          fontSize: "16px", // Adjust the font size as needed
        },
      },
    },
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Order());
    console.log(orders);
  }, [dispatch]);

  return (
    <>
      <Container maxWidth={"1200px"} marginTop={"5rem"}>
        <Heading as={"h1"}>Orders</Heading>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th fontSize="sm"> </Th>
              <Th fontSize="sm" width={"17%"}>
                <Text fontSize="sm"> Order number </Text>

                <Input
                  type="text"
                  placeholder="Order number"
                  _placeholderShown={{ fontSize: "9px" }}
                />
              </Th>
              <Th fontSize="sm">
                {" "}
                <Text fontSize="sm" fontWeight={"500"}>
                  Date{" "}
                </Text>
                <Box display={"flex"}>
                  <Input
                    type="text"
                    width={"6rem"}
                    _placeholderShown={{ fontSize: "9px" }}
                    placeholder="From"
                  />

                  <Input
                    type="text"
                    width={"6rem"}
                    placeholder="To"
                    _placeholderShown={{ fontSize: "9px" }}
                  />
                </Box>
              </Th>
              <Th fontSize="sm" width={"20%"}>
                <Text fontSize="sm">Customer Email</Text>{" "}
                <Box>
                  <Input
                    type="text"
                    placeholder="Customer Email"
                    _placeholderShown={{ fontSize: "9px" }}
                  />
                </Box>
              </Th>
              <Th fontSize="sm" width={"20%"}>
                <Text fontSize="sm"> Shipment Status</Text>
                <Select placeholder="Select option" fontSize={"10px"}>
                  <option value="option1">All</option>
                  <option value="option2">Processing</option>
                  <option value="option3">Shhiped</option>
                  <option value="option3">Delievered</option>
                </Select>
              </Th>
              <Th fontSize="sm" width={"16%"}>
                <Text fontSize="sm"> Payment Status </Text>{" "}
                <Select placeholder="Select option" fontSize={"10px"}>
                  <option value="option1">All</option>
                  <option value="option2">Pending</option>
                  <option value="option3">Paid</option>
                </Select>
              </Th>
              <Th fontSize="sm">
                <Text fontSize="sm"> Total</Text>

                <Box display={"flex"}>
                  <Input
                    type="text"
                    placeholder="From"
                    width={"25%"}
                    _placeholderShown={{ fontSize: "9px" }}
                  />
                  <Input
                    type="text"
                    width={"25%"}
                    placeholder="To"
                    _placeholderShown={{ fontSize: "9px" }}
                  />
                </Box>
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {orders.map((item, index) => {
              return (
                <Tr key={index}>
                  <Td>
                    <Checkbox size={"lg"} />
                  </Td>
                  <Td fontSize={"sm"}>{item.user}</Td>
                  <Td fontSize={"sm"}>item.</Td>
                  <Td fontSize={"sm"}>item.</Td>
                  <Td fontSize={"sm"}>{item.status}</Td>
                  <Td fontSize={"sm"}>item.</Td>
                  <Td fontSize={"sm"}>{item.totalPrice}</Td>
                </Tr>
              );
            })}

            {/* Add more rows as needed */}
          </Tbody>
        </Table>
      </Container>
    </>
  );
};

export default AdminOrder;
