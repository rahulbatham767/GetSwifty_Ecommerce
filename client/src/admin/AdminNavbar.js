import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Box, Flex, Spacer, Heading, Button } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Logout } from "../app/features/HeroSection/heroSlice";
import { toast } from "react-toastify";
// Define a custom theme with increased font size

const AdminNavbar = () => {
  const { user } = useSelector((state) => state.hero.LoggedUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await dispatch(Logout());

      toast.error(user.username + " You are successfully Logout", {
        style: { fontSize: "12px" },
      });
    } catch (error) {
      toast.error("Logout failed, please try again.", {
        style: { fontSize: "12px" },
      });
    }
  };

  return (
    <Flex p="6" bg="blue.500" color="white" alignItems="center">
      <NavLink to={"/admin/products"}>
        <Heading as="h2" size="md" marginRight="6">
          AdminPanel
        </Heading>
      </NavLink>
      {user?.isAdmin ? (
        <Box fontSize="md">
          <NavLink to="/admin/products" style={{ marginRight: "3rem" }}>
            Products
          </NavLink>

          <NavLink to="/admin/add-product" style={{ marginRight: "3rem" }}>
            Add Product
          </NavLink>
          {/* Add more links for other sections */}
        </Box>
      ) : (
        ""
      )}
      <Spacer />
      {user?.isAdmin ? (
        <Button p="6" onClick={handleLogout}>
          Logout
        </Button>
      ) : (
        <Button p="6" as={Link} to={"/login"}>
          Login
        </Button>
      )}
    </Flex>
  );
};

export default AdminNavbar;
