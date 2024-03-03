import { createSlice } from '@reduxjs/toolkit';


const navSlice = createSlice({
    name: 'nav',
    initialState:{
        menuOpen: true
    },
    reducers: {
        toggleSidebar: (state, action)=>{
            state.menuOpen = action.payload;
        }
    }
});

export const { toggleSidebar } = navSlice.actions;

export default navSlice.reducer;