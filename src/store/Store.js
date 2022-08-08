import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/shopping-cart/CartSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer
    }
});

export default store;