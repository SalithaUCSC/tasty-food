import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cartItems: [],
    totalQuantity: 0,
    totalAmount: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addItem(state, action) {
            const newItem = action.payload;
            const existingItem = state.cartItems.find(item => item.id === newItem.id);
            state.totalQuantity++;
            if (!existingItem) {
                state.cartItems.push({
                    id: newItem.id,
                    title: newItem.title,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice = Number(existingItem.totalPrice) + Number(existingItem.price);
            }
            state.totalAmount = getTotal(state.cartItems)
        }
    }
})

const getTotal = (items) => {
    let total = Number(0);
    items.forEach(item => {
        total += Number(item.price) * Number(item.quantity)
    });
    return total;
}

export const cartActions = cartSlice.actions;
export default cartSlice;