import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GOOGLE_API_KEY, YOUTUBE_SEARCH_VIDEOS_API } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addVideoSearchResults } from '../utils/videoSlice';
import VideoCardTwo from './VideoCardTwo';
import { toggleSidebar } from '../utils/navSlice';
const SearchPage = ()=>{
    const { searchTerm } = useParams();
    const dispatch = useDispatch();
    const videos = useSelector((store)=> store.video.videoSearchResults);
    console.log("Search page renders");

    const getSearchResults = async()=>{
       const response = await fetch(`${YOUTUBE_SEARCH_VIDEOS_API}&q=${searchTerm}&maxResults=50&key=${GOOGLE_API_KEY}`);
       const data = await response.json();
       dispatch(addVideoSearchResults(data.items));
    }

    useEffect(()=>{
        dispatch(toggleSidebar(true));
    },[])

    useEffect(()=>{
        getSearchResults();
    },[searchTerm]);
    return (
        <div className='p-8'>
            {videos.map((item)=> <VideoCardTwo videoInfo={item} />)}
        </div>
    )
}

export default SearchPage;