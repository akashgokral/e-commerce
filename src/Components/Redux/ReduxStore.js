import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "./Reducer"

const ReduxStore = configureStore({
    reducer: {
        cart: cartReducer,
    },

});

export default ReduxStore;
