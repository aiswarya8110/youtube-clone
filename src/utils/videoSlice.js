import { createSlice } from '@reduxjs/toolkit';

const videoSlice = createSlice({
    name: 'video',
    initialState: {
        currentlyPlayingVideo: null,
        popularVideos: [],
        videoSearchResults: [],
        currentlyPlayingVideoComments: []
    },

    reducers: {
        addCurrentlyPlayingVideo: (state, action)=>{
            return {...state, currentlyPlayingVideo: action.payload}
        },
        addPopularVideos: (state, action)=>{
            return {...state, popularVideos: action.payload}
        },
        addVideoSearchResults: (state, action)=>{
            return {...state, videoSearchResults: action.payload}
        },
        addCurrentlyPlayingVideoComments: (state, action)=>{
            return {...state, currentlyPlayingVideoComments: action.payload}
        }
    }
})

export const { addCurrentlyPlayingVideo, addPopularVideos, addVideoSearchResults, addCurrentlyPlayingVideoComments } = videoSlice.actions;

export default videoSlice.reducer;