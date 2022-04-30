import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        ADD(state, action) {
            state.push(action.payload);
        },
    },
});

export const { ADD } = cartSlice.actions;

export default cartSlice.reducer;


// const INIT_STATE = {
//     carts: []
// };

// export const cartreducer = (state = INIT_STATE, action) => {
//     switch (action.type) {
//         case "ADD_CART":
//             return {
//                 ...state,
//                 carts: [...state.carts, action.payload]

//             }
//         default:
//             return state
//     }
// }