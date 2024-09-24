import { configureStore } from "@reduxjs/toolkit";
import heroSlice from "./features/HeroSection/heroSlice";
import thunk from "redux-thunk";

import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, heroSlice);

export const Store = configureStore({
  reducer: {
    hero: persistedReducer,
  },
  middleware: [thunk],
  devTools: true,
});

export const persistor = persistStore(Store);
