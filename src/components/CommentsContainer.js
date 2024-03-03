import React, { useEffect } from 'react';
import Comments from './Comments';
import { useSearchParams } from 'react-router-dom';
import { GOOGLE_API_KEY, YOUTUBE_COMMENTS_API } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addCurrentlyPlayingVideoComments } from '../utils/videoSlice';

const CommentsContainer = ()=>{
    const [ searchParams ] = useSearchParams();
    const videoId = searchParams.get("v");
    const dispatch = useDispatch();
    const comments = useSelector((store)=> store.video.currentlyPlayingVideoComments);
    const getComments = async()=>{
       const response = await fetch(YOUTUBE_COMMENTS_API+`${videoId}&key=${GOOGLE_API_KEY}`);
       const data = await response.json();
       dispatch(addCurrentlyPlayingVideoComments(data?.items));
    }

    useEffect(()=>{
        getComments();
    },[videoId])
    
    if(!comments) return

    return (
        <div className="pt-5">
            <h1 className="text-2xl font-semibold">{comments.length}{' '}Comments</h1>
            <Comments data={comments} />
        </div>
    )
}

export default CommentsContainer;