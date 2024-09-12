/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
import { TProduct } from "../../dataType/dataType";
import { toast } from "react-toastify";

interface CartProduct extends TProduct {
  quantity: number;
}

interface CartState {
  products: CartProduct[];
  selectedItems: number;
  subTotal: number;
  shipping: number;
  total: number;
}

const initialState: CartState = {
  products: [],
  selectedItems: 0,
  subTotal: 0,
  shipping: 5,
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isExist = state.products.find(
        (product) => product._id === action.payload._id
      );

      if (!isExist) {
        if (action.payload.stock > 0) {
          state.products.push({ ...action.payload, quantity: 1 });
          toast.success(`${action.payload.title} added to cart!`);
        } else {
          toast.error(`${action.payload.title} is out of stock.`);
        }
      } else {
        toast.error(`${action.payload.title} is already in the cart`);
      }

      // Recalculate selectedItems and totalPrice
      state.selectedItems = selectSelectedItems(state);
      state.subTotal = selectSubTotal(state);
      state.total = selectTotal(state);
    },
    updateQuantity: (state, action) => {
      const product = state.products.find(
        (product) => product._id === action.payload.id
      );

      if (product) {
        if (
          action.payload.type === "increment" &&
          product.quantity < product.stock
        ) {
          product.quantity += 1;
        } else if (
          action.payload.type === "decrement" &&
          product.quantity > 1
        ) {
          product.quantity -= 1;
        }else{
          toast.error(`Cannot add more than available stock for ${product.title}.`)
        }
      }

      // Recalculate totals after quantity update
      state.selectedItems = selectSelectedItems(state);
      state.subTotal = selectSubTotal(state);
      state.total = selectTotal(state);
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload.id
      );

      // Recalculate totals after quantity update
      state.selectedItems = selectSelectedItems(state);
      state.subTotal = selectSubTotal(state);
      state.total = selectTotal(state);
    },
    clearCart: (state) => {
      state.products = [];
      state.selectedItems = 0;
      state.subTotal = 0;
      state.shipping = 5;
      state.total = 0;
    },
  },
});

export const selectSelectedItems = (state: CartState) => {
  return state.products.reduce((total, product) => total + product.quantity, 0);
};

export const selectSubTotal = (state: CartState) => {
  return state.products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
};

export const selectTotal = (state: CartState) => {
  const subTotal = selectSubTotal(state);
  return subTotal + state.shipping;
};

export const { addToCart, updateQuantity, clearCart, deleteProduct } =
  cartSlice.actions;

export default cartSlice.reducer;
