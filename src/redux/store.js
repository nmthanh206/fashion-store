import { configureStore } from "@reduxjs/toolkit";

import productModalReducer from "./product-modal/productModalSlice";
import cartItemsReducer from "./shopping-cart/cartItemsSlide";
// import storage from "redux-persist/lib/storage";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import {
   persistStore,
   persistReducer,
   FLUSH,
   REHYDRATE,
   PAUSE,
   PERSIST,
   PURGE,
   REGISTER,
} from "redux-persist";

const createNoopStorage = () => {
   return {
      getItem(_key) {
         return Promise.resolve(null);
      },
      setItem(_key, value) {
         return Promise.resolve(value);
      },
      removeItem(_key) {
         return Promise.resolve();
      },
   };
};

const storage =
   typeof window !== "undefined"
      ? createWebStorage("local")
      : createNoopStorage();

const persistCartItemsConfig = {
   key: "cartItems",
   storage,
};
const persistedCartItemsReducer = persistReducer(
   persistCartItemsConfig,
   cartItemsReducer
);

export const store = configureStore({
   reducer: {
      productModal: productModalReducer,
      cartItems: persistedCartItemsReducer,
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
         },
      }),
});
export const persistor = persistStore(store);
