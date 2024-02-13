import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            // old redux used to prevent direct mutation of state.
            // return {items : [...state.items, action.payload]}
            // Now we can mutate or return, no need to return new state.
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items.pop();
        },
        clearCart: (state) => {
            // state = {items: []} -> this doesn't work.
            // Because redux can't identify as the state is muted or changed
            // So direct assignment to state doesn't work
            state.items = [];
        }
    }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;