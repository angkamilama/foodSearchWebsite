import { configureStore } from "@reduxjs/toolkit";
import SearchFoodSlice from "../slices/SearchFoodSlice";

 const store = configureStore({
    reducer: {
        food: SearchFoodSlice.reducer
    }
 })


 export  {store};

 const  val = store.getState();
 console.log(val);