import { createSlice } from "@reduxjs/toolkit";
import { addCartItem, removeCartItem, clearCartItem } from "./cart.action";

const CART_INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState: CART_INITIAL_STATE,
    reducers: {
        setCartItems(state, action) {
            state.cartItems = action.payload;
        },
        setIsCartOpen(state, action) {
            state.isCartOpen = action.payload;
        },
        addItemToCart(state, action) {
            const newCartItems = addCartItem(state.cartItems, action.payload);
            state.cartItems = newCartItems;
        },
        removeItemFromCart(state, action) {
            const newCartItems = removeCartItem(
                state.cartItems,
                action.payload
            );
            state.cartItems = newCartItems;
        },
        clearItemFromCart(state, action) {
            const newCartItems = clearCartItem(state.cartItems, action.payload);
            state.cartItems = newCartItems;
        },
    },
});

export const {
    setCartItems,
    setIsCartOpen,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
