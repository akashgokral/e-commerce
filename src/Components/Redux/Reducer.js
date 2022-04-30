import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        ADD(state, action) {
            state.push(action.payload);
        },
        REMOVE(state, action) {
            return state.filter((item) => item.id !== action.payload)
        }
    },
});

export const { ADD, REMOVE } = cartSlice.actions;

export default cartSlice.reducer;


