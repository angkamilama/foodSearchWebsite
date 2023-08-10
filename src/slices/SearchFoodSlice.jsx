import { createSlice } from "@reduxjs/toolkit";

const SearchFoodSlice = createSlice({
    name: 'food',
    initialState: {
        Items:[]
    },
    reducers: {
        addFood(state, action) { 
            state.Items = action.payload;
            return;
        }
    }
})
export const {addFood} = SearchFoodSlice.actions;
export default SearchFoodSlice;