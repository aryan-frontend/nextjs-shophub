import { createSlice } from "@reduxjs/toolkit";

// const getCartFromStorage  = () => {
//     if(typeof window !== "undefined"){
//         const cart = localStorage.getItem("CART");
//         return cart ? JSON.parse(cart) : [];
//     }
//     return [];
// }

export let cartSlice = createSlice(
    {
        name: "Cart",
        initialState: {
            cart: [],
        },
        reducers: {
            loadCart: (state, reqData) => {
                state.cart = reqData.payload;
            },
            addToCart: (state, reqData) => {
                state.cart = [reqData.payload, ...state.cart];
                localStorage.setItem("CART", JSON.stringify(state.cart))
            },
            removeCart: (state, reqData) => {
                state.cart = state.cart.filter((obj) => obj.id !== reqData.payload);
                localStorage.setItem("CART", JSON.stringify(state.cart))
            },
            changeQty: (state, reqData) => {
                let { id, finalQty } = reqData.payload;

                state.cart = state.cart.map((obj) => {
                    if (obj.id == id) {
                        return { ...obj, qty: finalQty };
                    }
                    return obj;
                });
                localStorage.setItem("CART", JSON.stringify(state.cart))
            }
        }
    }
)

export const { loadCart, addToCart, removeCart, changeQty } = cartSlice.actions
export default cartSlice.reducer