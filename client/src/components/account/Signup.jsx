// pages/signup.js
import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Heading,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { Register } from "../../app/features/HeroSection/heroSlice";
import { toast } from "react-toastify";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    role: "user", // default role
    isAdmin: false,
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = dispatch(Register(formData)).unwrap();
      console.log(response);
      if (response.ok) {
        toast(response.user.username + " You have successfully registered");
      } else {
        toast("Signup failed ");
        throw new Error("Signup failed.");
      }
    } catch (error) {
      toast("An error Occured While creating your account ");
      throw new Error("An error occurred while creating your account " + error);
    }
  };

  return (
    <Box maxW="md" mx="auto" marginTop={"7rem"} p={5}>
      <Heading as="h1" size={"md"} mb={5}>
        Register
      </Heading>
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl id="username" isRequired>
            <FormLabel>Username</FormLabel>
            <Input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              fontSize={"2rem"}
              textTransform={"lowercase"}
            />
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              value={formData.email}
              textTransform={"lowercase"}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </FormControl>
          <Button type="submit" size="md" padding={"2rem"} marginTop={"2rem"}>
            Signup
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default Signup;
