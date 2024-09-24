import React, { useEffect, useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../styles/Button";
import { useDispatch } from "react-redux";
import {
  FilterData,
  Update_Product,
  getData,
  sorting,
} from "../app/features/HeroSection/heroSlice";

const UpdateModal = ({ id, elem }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [productTitle, setProductTitle] = useState(elem.name || "");
  const [productPrice, setProductPrice] = useState(elem.price || "");
  const [stock, setStock] = useState(elem.stock || "");
  const [description, setDescription] = useState(elem.description || "");
  const [image, setImage] = useState(elem.image || [""]);

  const update = () => {
    // Access the values using the state variables
    console.log("Product Title:", productTitle);
    console.log("Id is:", id);
    console.log("Product Price:", productPrice);
    console.log("Stock:", stock);
    console.log("Description:", description);
    console.log("Image:", image);
    const Send_data = {
      name: productTitle,
      id,
      price: productPrice,
      stock,
      description,
      image,
    };

    dispatch(Update_Product(Send_data));
    dispatch(FilterData());
    dispatch(getData());
    onClose();
  };
  const handleImageChange = (index, value) => {
    const newImages = [...image];
    newImages[index] = value;
    setImage(newImages);
  };

  return (
    <>
      <Button onClick={onOpen}>
        <span>
          <FontAwesomeIcon icon={faPen} />
        </span>
        edit
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size="50rem"
      >
        <ModalOverlay />
        <ModalContent width="50rem">
          <ModalHeader>Update Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6} width="50rem" textTransform="capitalize">
            <FormControl>
              <FormLabel>Product Title</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Product Title"
                variant="outline"
                size="md"
                value={productTitle}
                onChange={(e) => setProductTitle(e.target.value)}
                fontSize="1.3rem"
                rounded="2rem"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Product Price</FormLabel>
              <Input
                placeholder="Product Price"
                type="number"
                size="md"
                textTransform="lowercase"
                variant="outline"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
                fontSize="1.3rem"
                rounded="2rem"
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Stock</FormLabel>
              <Input
                placeholder="Stock"
                type="number"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                size="md"
                variant="outline"
                fontSize="1.3rem"
                rounded="2rem"
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Textarea
                placeholder="Description"
                size="md"
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
              {elem.image.map((img, index) => {
                return (
                  <Input
                    key={index}
                    placeholder="Image Link"
                    textTransform="lowercase"
                    value={image[index]}
                    onChange={(e) => handleImageChange(index, e.target.value)}
                    size="md"
                    variant="outline"
                    fontSize="1.3rem"
                    rounded="2rem"
                  />
                );
              })}
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button style={{ marginRight: "2rem" }} onClick={update}>
              Update
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UpdateModal;
