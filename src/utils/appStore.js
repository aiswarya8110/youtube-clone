import { configureStore } from '@reduxjs/toolkit';
import navReducer from './navSlice';
import searchReducer from './searchSlice';
import chatReducer from './chatSlice';
import videoCategoryReducer from './videoCategorySlice';
import videoSliceReducer from './videoSlice';
import themeSliceReducer from './themeSlice';
const appStore = configureStore({
    reducer: {
        nav: navReducer,
        search: searchReducer,
        chats: chatReducer,
        videoCategory: videoCategoryReducer,
        video: videoSliceReducer,
        theme: themeSliceReducer
    }
});

export default appStore;