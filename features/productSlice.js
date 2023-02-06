import { createSlice, current } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState = {
  products: [],
  selectedProducts: [],
  totalPrice: 0,
  totalQty: 0,
  cart: [],
};
let newCart, newProducts, price, foundProduct;

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    productCart(state, action) {
      newProducts = action.payload.map(item => ({ ...item, qty: 1 }));
      return { ...state, products: newProducts };
    },

    categoryItems(state, action) {
      newProducts = JSON.parse(
        JSON.stringify(
          state.products.filter(product => product.gender === action.payload)
        )
      );
      return { ...state, selectedProducts: newProducts };
    },

    exploreItems(state, action) {
      newProducts = JSON.parse(
        JSON.stringify(
          state.products.filter(product => product.category === action.payload)
        )
      );
      return { ...state, selectedProducts: newProducts };
    },

    addToCart(state, action) {
      let findInProducts = state.products.find(
        product => product._id === action.payload
      );
      foundProduct = state.cart.find(product => product._id === action.payload);
      toast.success(`${findInProducts.name} Added to cart`);
      if (foundProduct) {
        newCart = state.cart.map(item => {
          if (item._id === foundProduct._id) {
            return { ...item, qty: item.qty + 1 };
          } else {
            return item;
          }
        });
        price = newCart
          .map(item => item.price * item.qty)
          .reduce((acc, item) => acc + item, 0);
        return {
          ...state,
          cart: newCart,
          totalQty: state.totalQty + 1,
          totalPrice: price,
        };
      } else {
        newCart = [...state.cart, findInProducts];
        price = newCart
          .map(item => item.price * item.qty)
          .reduce((acc, item) => acc + item, 0);
        return {
          ...state,
          cart: newCart,
          totalQty: state.totalQty + 1,
          totalPrice: price,
        };
      }
    },
    toggleCartQuantity(state, { payload }) {
      let quantities;
      const { id, type } = payload;
      newCart = state.cart
        .map(item => {
          if (item._id === id) {
            if (type === "inc") {
              return { ...item, qty: item.qty + 1 };
            } else if (type === "dec") {
              if (item.qty === 1) {
                toast.success(`${item.name} removed`);
                return { ...item, qty: 0 };
              } else {
                return { ...item, qty: item.qty - 1 };
              }
            }
          } else {
            return item;
          }
        })
        .filter(item => item.qty !== 0);

      if (type === "inc") {
        quantities = state.totalQty + 1;
      } else if (type === "dec") {
        quantities = state.totalQty - 1;
      }
      price = newCart
        .map(item => item.price * item.qty)
        .reduce((acc, item) => acc + item, 0);

      return {
        ...state,
        cart: newCart,
        totalQty: quantities,
        totalPrice: price,
      };
    },
    removeItem(state, { payload }) {
      newCart = state.cart.filter(item => item._id !== payload);
      foundProduct = state.cart.find(item => item._id === payload);
      toast.success(`${foundProduct.name} removed`);
      return {
        ...state,
        cart: newCart,
        totalQty: state.totalQty - foundProduct.qty,
      };
    },
    clearCart(state) {
      return { ...state, cart: [], totalPrice: 0, totalQty: 0 };
    },
  },
});

export default productSlice.reducer;
export const {
  productCart,
  categoryItems,
  exploreItems,
  addToCart,
  toggleCartQuantity,
  removeItem,
  clearCart,
} = productSlice.actions;
