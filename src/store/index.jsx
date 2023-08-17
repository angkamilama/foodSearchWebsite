import { configureStore } from "@reduxjs/toolkit";
import SearchFoodSlice from "../slices/SearchFoodSlice";

const store = configureStore({
    reducer: {
        food: SearchFoodSlice,
    }
})


export default store;

console.log(store.getState().food);