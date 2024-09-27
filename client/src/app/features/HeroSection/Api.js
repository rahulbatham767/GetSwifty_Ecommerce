import axios from "axios";

const url = "https://get-swifty-ecommerce-backend.vercel.app/api/";

export const login = async (data) => {
  const response = await axios.post(url + "users/login", data);
  console.log(response);

  return response;
};
export const register = async (data) => {
  const response = await axios.post(url + "users", data);
  console.log(response);

  return response;
};

export const Product = async () => {
  const response = await axios.get(url + "product");
  console.log(response);

  return response.data;
};
export const SingleProduct = async (id) => {
  const response = await axios.get(url + "product/singleproduct/" + id);
  console.log(response);
  return response.data;
};

export const AddToCartbuy = (data) => {
  console.log(data);

  try {
    const { id, color, amount, product } = data;

    // Assuming you want to create a cardProduct object with id and color
    console.log(product);

    const cardProduct = {
      id: id + color,
      // Add other properties as needed
      // For example: color, amount, product
      color: color,
      amount: amount,
      image: product.image[0],
      price: product.price,
      max: product.stock,
      name: product.name,
    };

    // Return the created cardProduct
    return cardProduct;
  } catch (error) {
    return error.message;
  }
};

export const Updateproduct = (data) => {
  const { id } = data;
  console.log(data);

  return axios.put(url + "product/" + id, data);
};

export const Deleteproduct = (id) => {
  console.log(id);

  return axios.delete(url + "product/" + id);
};
export const CreateProduct = (data) => {
  return axios.post(url + "product", data);
};

export const buynow = async (data) => {
  try {
    const response = await axios.post(`${url}orders`, data);
    console.log(response);

    return response;
  } catch (error) {
    console.log(error);
  }
};

export const order_get = async () => {
  try {
    const response = await axios.get(`${url}orders`);
    console.log(response);

    return response;
  } catch (error) {
    console.log(error);
  }
};

export const filter = async (value) => {
  const products = await Product();
  let newSortData = [...products];
  if (value.text) {
    newSortData = newSortData.filter((product) =>
      product.name.toLowerCase().includes(value.text.toLowerCase())
    );
  }

  // Company filter
  if (value.company && value.company.toLowerCase() !== "all") {
    newSortData = newSortData.filter(
      (product) => product.company === value.company
    );
  }

  // Color filter
  if (value.color && value.color.toLowerCase() !== "all") {
    newSortData = newSortData.filter(
      (product) => product.color === value.color
    );
  }

  // Price filter
  if (value.price) {
    newSortData = newSortData.filter((product) => product.price <= value.price);
  }

  // Category filter
  if (value.category && value.category.toLowerCase() !== "all") {
    newSortData = newSortData.filter(
      (product) => product.category === value.category
    );
  }

  console.log(newSortData);

  // Return the filtered products
  return newSortData;
};
export const sorting = async (value) => {
  const product = await Product();
  let data;
  const sortingProduct = (a, b) => {
    return a.price - b.price;
  };
  // console.log(data);

  switch (value) {
    case "a-z":
      data = [...product].sort((a, b) => b.name.localeCompare(a.name));
      data = [...product].sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "z-a":
      data = [...product].sort((a, b) => b.name.localeCompare(a.name));
      break;
    case "lowest":
      data = [...product].sort(sortingProduct);
      break;
    case "highest":
      data = [...product].sort((a, b) => sortingProduct(b, a));
      break;
    case "All":
      data = product;
      break;
    case "":
      data = product;
      break;
    default:
      data = [...product].filter(({ name }) =>
        name.toLowerCase().includes(value.toLowerCase())
      );
      break;
  }
  console.log(data);

  return data;
};
const Api = {
  Product,
  order_get,
  buynow,
  SingleProduct,
  CreateProduct,
  AddToCartbuy,
  sorting,
  Updateproduct,
  Deleteproduct,
};

export default Api;
