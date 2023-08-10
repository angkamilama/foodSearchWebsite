import { createSlice } from "@reduxjs/toolkit";

const SearchFoodSlice = createSlice({
    name: 'food',
    initialState: [],
    reducers: {
        addFood(state, action) { 
           state.push(action.payload)
          
        }
    }
})
export const {addFood} = SearchFoodSlice.actions;
export default SearchFoodSlice;