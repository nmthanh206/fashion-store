import { createSlice } from "@reduxjs/toolkit";

// const items =
//    typeof window !== "undefined" && localStorage.getItem("cartItems") !== null
//       ? JSON.parse(localStorage.getItem("cartItems"))
//       : [];

// const initialState = {
//    value: items,
// };

const initialState = {
   value: [],
};

export const cartItemsSlice = createSlice({
   name: "cartItems",
   initialState,
   reducers: {
      addItem: (state, action) => {
         const newItem = action.payload;
         const index = state.value.findIndex(
            (e) =>
               e.slug === newItem.slug &&
               e.color === newItem.color &&
               e.size === newItem.size
         );
         if (index > 0) {
            state.value[index].quantity += newItem.quantity;
         } else {
            state.value.push({
               ...newItem,
               id:
                  state.value.length > 0
                     ? state.value[state.value.length - 1].id + 1
                     : 1,
            });
         }
      },
      updateItem: (state, action) => {
         const newItem = action.payload;
         let index = state.value.findIndex(
            (e) =>
               e.slug === newItem.slug &&
               e.color === newItem.color &&
               e.size === newItem.size
         );
         state.value[index] = newItem;
      },

      removeItem: (state, action) => {
         const item = action.payload;
         state.value = state.value.filter(
            (e) =>
               e.slug !== item.slug ||
               e.color !== item.color ||
               e.size !== item.size
         );
      },
   },
});

// Action creators are generated for each case reducer function
const shoppingCartActions = cartItemsSlice.actions;
export { shoppingCartActions };

export default cartItemsSlice.reducer;
