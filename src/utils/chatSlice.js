import { createSlice } from '@reduxjs/toolkit';
import { OFFSET_LIVE_CHAT } from '../utils/constants';

const chatSlice = createSlice({
    name: "cart",
    initialState:{
        chats: []
    },
    reducers: {
        addChat: (state, action)=>{
            state.chats.splice(OFFSET_LIVE_CHAT, 1);
            state.chats.unshift(action.payload)
        }
    }
});

export const { addChat } = chatSlice.actions;

export default chatSlice.reducer;