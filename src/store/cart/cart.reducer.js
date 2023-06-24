// import { CART_ACTION_TYPES } from './cart.types';
import { createSlice } from "@reduxjs/toolkit";


const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  // find the cart item to remove
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  // check if quantity is equal to 1, if it is remove that item from the cart
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  // return back cartitems with matching cart item with reduced quantity
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);


const CART_INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
};


export const cartSlice = createSlice({
  name: 'cart',
  initialState: CART_INITIAL_STATE,
  reducers: {
    addItemToCart(state, action) {
      const newCartItems = addCartItem(state.cartItems, action.payload);
      state.cartItems = newCartItems;
    },
    removeItemFromCart(state, action) {
      const newCartItems = removeCartItem(state.cartItems, action.payload);
      state.cartItems = newCartItems;
    },
    clearItemFromCart(state, action) {
      const newCartItems = clearCartItem(state.cartItems, action.payload);
      state.cartItems = newCartItems;
    },
    setIsCartOpen(state, action) {
      state.isCartOpen = action.payload;
    },
  }
})

export const { addItemToCart, removeItemFromCart,clearItemFromCart, setIsCartOpen } = cartSlice.actions;


export const cartReducer = cartSlice.reducer;


