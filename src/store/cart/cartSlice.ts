import { Cart } from "@/types/cart"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface CartState {
  items: Cart[]
}

const initialState: CartState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    getCart: (state, action: PayloadAction<Cart[]>) => {
      state.items = action.payload
    },
    addToCart: (state, action: PayloadAction<Cart>) => {
      state.items.push(action.payload)
    }
  }
})

export const { getCart, addToCart } = cartSlice.actions
export default cartSlice.reducer
