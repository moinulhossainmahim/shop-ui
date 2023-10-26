import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProductTemp } from "../../components/Products/types";
import { ProductToggleType } from "../../components/Cart/types.d";

export interface ProductToggleAction {
  id: string;
  type: ProductToggleType;
}

export interface ICartItem extends IProductTemp {
  amount: number;
}

export interface CartStore {
  cartProducts: ICartItem[];
}

const initialState: CartStore = {
  cartProducts: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Omit<ICartItem, 'amount'>>) => {
      state.cartProducts = [...state.cartProducts, { ...action.payload, amount: 1 }];
    },
    removeProduct: (state, action: PayloadAction<{ id: string }>) => {
      state.cartProducts = state.cartProducts.filter((product) => product.id !== action.payload.id);
    },
    toggleQuantity: (state, action: PayloadAction<ProductToggleAction>) => {
      const { type, id } = action.payload;
      const tempCartItems = state.cartProducts.map((product) => {
        if(id === product.id) {
          if(type === ProductToggleType.INCREMENT) {
            return { ...product, amount: product.amount + 1 }
          }
          if(type === ProductToggleType.DECREMENT) {
            return { ...product, amount: product.amount - 1 }
          }
        }
        return product;
      }).filter((product) => product.amount !== 0)
      state.cartProducts = tempCartItems;
    },
  }
})

export const { addProduct, removeProduct, toggleQuantity } = cartSlice.actions
export default cartSlice.reducer;
