import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { StrictMode } from "react";
import { GlobalStyle } from "./GlobalStyle";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import SingleProduct from "./pages/singleProduct/SingleProduct";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Products from "./pages/product/Products";
import Cart from "./components/cart/Cart";
import ErrorPage from "./pages/error/ErrorPage";
import Header from "./layout/Header";
import AddProduct from "./admin/AddProduct";
import BuyNow from "./pages/order/BuyNow";
import AdminOrder from "./admin/AdminOrder";
import Login from "./components/account/Login";
import AdminNavbar from "./admin/AdminNavbar";
import AdminProducts from "./admin/Products";
import Signup from "./components/account/Signup";
import { ToastContainer } from "react-toastify";
const App = () => {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29,29,29,0.8)",
      white: "#fff",
      black: "#212529",
      helper: "#8490ff",
      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };
  const { user } = useSelector((state) => state.hero.LoggedUser);
  const { LoggedIn } = useSelector((state) => state.hero);

  const customTheme = extendTheme({
    fonts: {
      heading: "Roboto", // You can customize the font family here
    },
    colors: {
      green: {
        500: "#38A169", // Define color variants for green and red
      },
      red: {
        500: "#E53E3E",
      },
    },
    sizes: {
      modal: {
        sm: "20rem",
        md: "35rem",
        lg: "50rem",
        xl: "65rem",
      },
    },
    fontSizes: {
      sm: "14px", // Small font size
      md: "20px", // Medium font size
      lg: "26px", // Large font size
      xl: "32px", // Extra large font size
    },
    components: {
      Input: {
        baseStyle: {
          padding: "10px",
          fontSize: "12px",
          _placeholder: {
            fontSize: "12px",
          },
          textTransform: "lowercase",
        },
      },
      Alert: {
        baseStyle: {
          containerStyle: {
            colorScheme: "green", // Default color scheme
          },
        },
      },
    },
  });

  const location = useLocation();

  // Check if the current path is under the /admin route

  return (
    <StrictMode>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <ChakraProvider theme={customTheme}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          {location.pathname.startsWith("/admin") && <AdminNavbar />}
          {!location.pathname.startsWith("/admin") && <Header />}

          <Routes>
            <Route
              path="/admin"
              element={<Navigate to="/admin/login" replace />}
            />
            {LoggedIn && user?.isAdmin ? (
              <>
                {/* <Route path="/admin/dashboard" element={<Dashboard />} /> */}
                <Route path="/admin/products" element={<AdminProducts />} />
                <Route path="/admin/orders" element={<AdminOrder />} />
                <Route path="/admin/add-product" element={<AddProduct />} />
              </>
            ) : (
              <Route path="/admin/login" element={<Login />} />
            )}
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home />} />
            <Route path="/buynow" element={<BuyNow />} />
            <Route path="/product" element={<Products />} />
            {!LoggedIn && <Route path="/login" element={<Login />} />}
            {!LoggedIn && <Route path="/register" element={<Signup />} />}

            {/* {LoggedIn && <Route path="/cartbuy" element={<Cartbuy />} />} */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/singleproduct/:id" element={<SingleProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </ThemeProvider>
      </ChakraProvider>
    </StrictMode>
  );
};

export default App;
