import type { CartItem } from "../models/CartItem";
import { createSlice, type PayloadAction} from '@reduxjs/toolkit';

export type GadgetState = {
  cart: CartItem[];
};

export type GadgetAction = {
  type: string;
  payload?: GadgetState;
};

const initialState: GadgetState = {
  cart: [],
};

const slice = createSlice({
    name: "gadgetsSlice",
    initialState,
    reducers:{
        addToCart: (state, action: PayloadAction<CartItem>) =>{
            state.cart.push(action.payload);
        },
        removeFromCart:(state, action: PayloadAction<number>) =>{
            const index = state.cart.findIndex(c => c.product.id == action.payload);
            if(index != -1){
                state.cart.splice(index, 1);
            }
        },
        clearCart:(state) =>{
            state.cart.splice(0, state.cart.length);
        }
    }
})

export const {addToCart, clearCart, removeFromCart}  = slice.actions;

export const gadgetsReducer = slice.reducer;
// export const gadgetsReducer = (state = initialState, action) => {
//   if (action.type === "addtocart" && action.payload) {
//     //state.cart.push(action.payload);
//     const cart = [...state.cart];
//     cart.push(action.payload);
//     return {
//         cart: cart
//     }
//   }
//   return state;
// };
