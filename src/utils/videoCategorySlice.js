import { createSlice } from '@reduxjs/toolkit';

const videoCategorySlice = createSlice({
    name: 'videoCategory',
    initialState: {
        category: 'new'
    },
    reducers: {
        updateCategory: (state, action)=>{
            return {...state, category: action.payload}
        }
    }
});

export const { updateCategory } = videoCategorySlice.actions;

export default videoCategorySlice.reducer;