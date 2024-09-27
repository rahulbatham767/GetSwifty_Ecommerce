import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { User_Login } from "../../app/features/HeroSection/heroSlice";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({
    emailError: false,
    passwordError: false,
  });
  const dispatch = useDispatch();
  const location = useLocation();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setFormErrors({
      ...formErrors,
      [`${name}Error`]: false,
    });
  };
  const navigate = useNavigate();
  const handleLogin = async () => {
    // Validation logic
    let isValid = true;
    if (formData.email === "") {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        emailError: true,
      }));
      isValid = false;
    }
    if (formData.password === "") {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        passwordError: true,
      }));
      isValid = false;
    }

    // Dispatch login action if form is valid
    if (isValid) {
      try {
        const response = await dispatch(User_Login(formData)).unwrap();
        if (response.user.isAdmin && location.pathname.startsWith("/admin")) {
          navigate("/admin/products");
        } else if (response.user.role === "user") {
          toast("You are Successfully LoggedIn " + response.user.username, {
            style: {
              fontSize: "12px",
            },
          });
          navigate("/");
        }
        console.log(response.user.isAdmin, location.pathname);
      } catch (error) {
        console.log("error while login " + error);
      }
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <Box m={"auto"}>
        <FormControl isInvalid={formErrors.emailError}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            value={formData.email}
            textTransform={"lowercase"}
            onChange={handleInputChange}
            placeholder="Enter your email address"
          />
          {formErrors.emailError && (
            <FormErrorMessage>Email is required.</FormErrorMessage>
          )}
        </FormControl>
        <FormControl isInvalid={formErrors.passwordError}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          {formErrors.passwordError && (
            <FormErrorMessage>Password is required.</FormErrorMessage>
          )}
        </FormControl>
        <Text as={"h3"} marginTop={"1rem"}>
          Don't have a account?
          <Link to={"/register"} style={{ color: "blue" }}>
            Sign up
          </Link>
        </Text>
        <Button padding={"2rem"} mt={"2rem"} onClick={handleLogin}>
          Login
        </Button>
      </Box>
    </Box>
  );
}

export default Login;
