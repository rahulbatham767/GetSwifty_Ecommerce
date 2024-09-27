import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api, { filter, login, register } from "./Api";

export const getData = createAsyncThunk("hero/getData", async (_, thunkAPI) => {
  try {
    return await Api.Product();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const User_Login = createAsyncThunk(
  "hero/login",
  async (data, thunkApi) => {
    try {
      const response = await login(data);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const Register = createAsyncThunk(
  "hero/register",
  async (data, thunkApi) => {
    try {
      const response = await register(data);
      console.log(response);

      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const singleproduct = createAsyncThunk(
  "hero/singleproduct",
  async (id, thunkAPI) => {
    try {
      return await Api.SingleProduct(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const FilterData = createAsyncThunk(
  "hero/filterData",

  async (_, thunkAPI) => {
    try {
      const product = await Api.Product();
      return product;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const BuyNow_thunk = createAsyncThunk(
  "hero/buynow",
  async (data, thunkApi) => {
    try {
      const response = await Api.buynow(data);
      console.log(response);

      // Call the buynow function with the provided data
      return response.data; // Return the data from the API response
    } catch (error) {
      return thunkApi.rejectWithValue(error.message); // Return error data if request fails
    }
  }
);
export const sorting = createAsyncThunk(
  "hero/sorting",
  async (data, thunkAPI) => {
    try {
      return await Api.sorting(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const categoryfilter = createAsyncThunk(
  "hero/categoryfilter",
  async ({ name, category }, thunkAPI) => {
    try {
      return await Api.categoryfilter({ name, category });
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const filtersearch = createAsyncThunk(
  "hero/filtersearch",
  async (searchText, thunkAPI) => {
    try {
      const filterset = await Api.Product();

      const filtered = filterset.filter((elem) => {
        let low = elem.name.toLowerCase();
        return low.includes(searchText.toLowerCase());
      });
      return filtered;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const Category = createAsyncThunk(
  "hero/category",
  async (_, thunkAPI) => {
    try {
      const data = await Api.Product();
      let cat = ["All", ...new Set([...data].map((elem) => elem.category))];
      const category = Array.from(cat);

      return category;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const Company = createAsyncThunk("hero/company", async (_, thunkAPI) => {
  try {
    const data = await Api.Product();
    let cat = [...new Set([...data].map((elem) => elem.company))];
    const category = Array.from(cat);

    return category;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
export const Colors = createAsyncThunk("hero/colors", async (_, thunkAPI) => {
  try {
    const products = await Api.Product();
    let color = products.map((elem) => elem.colors);
    const data = ["All", ...new Set([].concat(...color))];

    // console.log(data);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const removeItem = createAsyncThunk(
  "hero/removeItem",
  (id, thunkApi) => {
    try {
      return id;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const AddToCartbuy = createAsyncThunk(
  "hero/AddToCart",
  async (data, thunkAPI) => {
    try {
      return await Api.AddToCartbuy(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
const getLocalCartData = () => {
  let newData = localStorage.getItem("cart");
  if (!newData || newData === "null") {
    return [];
  } else {
    return JSON.parse(newData);
  }
};

export const Update_Product = createAsyncThunk(
  "hero/update_product",
  async (data, thunkAPI) => {
    const response = await Api.Updateproduct(data);
    console.log(response.data);

    return response.data;
  }
);
export const Delete_Product = createAsyncThunk(
  "hero/delete_product",
  async (data, thunkAPI) => {
    const response = await Api.Deleteproduct(data);
    console.log(response.data);

    return response.data;
  }
);
export const Create_Product = createAsyncThunk(
  "hero/create_product",
  async (data, thunkAPI) => {
    const response = await Api.CreateProduct(data);
    console.log(response.data);

    return response.data;
  }
);

export const Create_order = createAsyncThunk(
  "hero/create_order",
  async (data, thunkAPI) => {
    try {
      const response = await Api.CreateOrder(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const Order = createAsyncThunk("hero/get_orders", async (_, thunApi) => {
  try {
    const response = await Api.order_get();

    return response.data;
  } catch (error) {
    return thunApi.rejectWithValue(error);
  }
});

export const FilterView = createAsyncThunk(
  "hero/get_filter",
  async (data, thunkApi) => {
    try {
      const response = await filter(data);
      console.log(response);

      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

const heading = {
  Home: "GetSwifty Ecommerce",
};
const heroSlice = createSlice({
  name: "hero",
  initialState: {
    data: [],
    loading: false,
    LoggedIn: false,
    LoggedUser: [],
    error: null,
    heading: heading,
    featureProducts: [],
    productDetails: [],
    previousFilter: [],
    orders: [],
    Filter: [],
    filters: {
      text: "",
      category: "all",
      company: "all",
      color: "all",
      maxPrice: 0,
      price: 0,
      minPrice: 0,
    },
    category: [],
    selectItem: "",
    company: [],
    addTocart: [],
    colors: [],
    price: 0,

    minPrice: 0,
    maxPrice: 0,
    gridview: false,
    admin: false,

    cart: getLocalCartData() === null ? [] : getLocalCartData(),
    total_item: "",

    total_amount: "",
    shipping_fee: 5000,
  },

  reducers: {
    // ... other reducers
    setIncrease: (state, action) => {
      const updatedCart = state.cart.map((item) => {
        if (item.id === action.payload) {
          let incAmount = item.amount + 1;
          if (incAmount >= item.max) {
            incAmount = item.max;
          }
          return {
            ...item,
            amount: incAmount,
          };
        } else {
          return item;
        }
      });
      return { ...state, cart: updatedCart };
    },
    setDecrease: (state, action) => {
      const id = action.payload;
      const updatedCart = state.cart.map((item) => {
        if (item.id === id && item.amount > 1) {
          return {
            ...item,
            amount: item.amount - 1,
          };
        }
        return item;
      });

      return {
        ...state,
        cart: updatedCart,
      };
    },
    setFilter: (state, action) => {
      state.filters = action.payload;
    },

    clearFilter: (state) => {
      // Reset the filter state to the initial state
      return {
        ...state,
        filters: {
          text: "",
          category: "all",
          company: "all",
          color: "all",
          price: 0,
          minPrice: state.minPrice,
          maxPrice: state.maxPrice,
        },
      };
    },
    clearCart: (state) => {
      state.cart = [];
    },
    handelItem: (state, action) => {
      let item = action.payload;
    },
    gridviews: (state, action) => {
      state.gridview = action.payload;
    },
    checkout: (state, action) => {
      state.addTocart = action.payload;
    },

    ClearCheckout: (state, action) => {
      state.addTocart = [];
    },
    PriceGet: async (state, action) => {
      state.filters.price = action.payload;
    },
    Logout: (state, action) => {
      state.LoggedIn = false;
      localStorage.removeItem("token");
      state.LoggedUser = [];
    },
  },

  extraReducers: (builder) => {
    builder
      // Send Product
      .addCase(getData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.minPrice = Math.min(...action.payload.map((elem) => elem.price));
        state.maxPrice = Math.max(...action.payload.map((elem) => elem.price));
        state.Filter = [...action.payload];

        state.featureProducts = action.payload.filter((elem) => {
          return elem.featured === true;
        });
      })
      .addCase(getData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Single Product
      .addCase(singleproduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(singleproduct.fulfilled, (state, action) => {
        state.loading = false;
        state.productDetails = action.payload;
      })
      .addCase(singleproduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Sorting
      .addCase(sorting.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sorting.fulfilled, (state, action) => {
        console.log(action.payload);
        state.loading = false;
        state.Filter = action.payload;
      })
      .addCase(sorting.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      //Filter Search
      .addCase(filtersearch.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(filtersearch.fulfilled, (state, action) => {
        state.loading = false;
        state.Filter = action.payload;
      })
      .addCase(filtersearch.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Category
      .addCase(Category.fulfilled, (state, action) => {
        state.category = action.payload;
        state.category = action.payload;

        // console.log(action.payload);
      })
      // category filter
      .addCase(categoryfilter.fulfilled, (state, action) => {
        // console.log(action.payload);

        state.Filter = action.payload;

        // console.log(action.payload);
      })
      .addCase(categoryfilter.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(categoryfilter.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Company filter
      .addCase(Company.fulfilled, (state, action) => {
        state.company = action.payload;
      })
      .addCase(Company.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(Company.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Colors
      .addCase(Colors.fulfilled, (state, action) => {
        state.colors = action.payload;
      })

      // AddToCartbuy
      .addCase(AddToCartbuy.fulfilled, (state, action) => {
        const newData = action.payload;

        // Check if the product already exists in the cart
        const existingProduct = state.cart.find(
          (item) => item.id === newData.id
        );

        if (existingProduct) {
          // Update the quantity if the product exists
          const updatedCart = state.cart.map((item) =>
            item._id === newData.id
              ? { ...item, amount: item.amount + newData.amount } // Increment the quantity
              : item
          );
          state.cart = updatedCart;
        } else {
          // If the product does not exist, add it to the cart with the specified amount
          state.cart = [...state.cart, { ...newData, amount: newData.amount }];
        }

        // Optionally, update local storage
        localStorage.setItem("cart", JSON.stringify(state.cart));
      })
      // RemoveItem
      .addCase(removeItem.fulfilled, (state, action) => {
        let update = state.cart.filter((elem) => elem.id !== action.payload);
        state.cart = update;
      })
      .addCase(Update_Product.pending, (state) => {
        state.loading = true;
      })
      .addCase(Update_Product.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(Update_Product.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(Delete_Product.pending, (state) => {
        state.loading = true;
      })
      .addCase(Delete_Product.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(Delete_Product.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(Create_Product.pending, (state) => {
        state.loading = true;
      })
      .addCase(Create_Product.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(Create_Product.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(BuyNow_thunk.pending, (state, action) => {
        state.selectItem = "false";
      })
      .addCase(BuyNow_thunk.fulfilled, (state, action) => {
        state.addTocart = action.payload;
      })
      .addCase(BuyNow_thunk.rejected, (state, action) => {
        state.selectItem = "false";
      })
      // get Order
      .addCase(Order.fulfilled, (state, action) => {
        state.orders = action.payload;
      })
      .addCase(Order.pending, (state) => {
        state.loading = true;
      })
      .addCase(Order.rejected, (state) => {
        state.error = true;
        state.loading = false;
      })
      .addCase(FilterView.fulfilled, (state, action) => {
        state.Filter = action.payload;
      })
      .addCase(FilterView.pending, (state) => {
        state.loading = true;
      })
      .addCase(FilterView.rejected, (state) => {
        state.error = true;
        state.loading = false;
      })
      .addCase(User_Login.fulfilled, (state, action) => {
        state.LoggedIn = true;
        console.log(action.payload);
        localStorage.setItem("token", action.payload.token);
        state.LoggedUser = action.payload;
      })
      .addCase(User_Login.pending, (state) => {
        state.loading = true;
      })
      .addCase(User_Login.rejected, (state) => {
        state.error = true;
        state.loading = false;
      })
      .addCase(Register.fulfilled, (state, action) => {
        state.LoggedIn = true;

        state.LoggedUser = action.payload;
      })
      .addCase(Register.pending, (state) => {
        state.loading = true;
      })
      .addCase(Register.rejected, (state) => {
        state.error = true;
        state.loading = false;
      });
  },
});
export const {
  clearFilter,
  clearCart,
  gridviews,
  setIncrease,
  setDecrease,
  checkout,
  setFilter,
  PriceGet,
  ClearCheckout,

  Logout,
} = heroSlice.actions;
export default heroSlice.reducer;
