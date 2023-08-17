import { createSlice } from "@reduxjs/toolkit";

const SearchFoodSlice = createSlice({
    name: 'food',
    initialState: '',
    reducers: {
        addFood(state, action) {
            const newValue = action.payload;
            return newValue;
        }
    }
})
export const { addFood } = SearchFoodSlice.actions;

export default SearchFoodSlice.reducer; 
