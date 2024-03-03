import { createSlice } from '@reduxjs/toolkit';
const searchSlice = createSlice({
    name: "search",
    initialState: {},
    reducers: {
        cacheSearchResults: (state, action)=>{
            // const obj = {"ip": ["iphone", "iphone 12"]}
            Object.assign(state, action.payload);
        }
    }
})

export const { cacheSearchResults } = searchSlice.actions;

export default searchSlice.reducer;