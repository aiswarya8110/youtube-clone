import { useEffect, useState } from 'react';
import { GOOGLE_API_KEY, YOUTUBE_SINGLE_VIDEO_API } from '../constants';
import millify from 'millify';
const useVideoData = (videoId)=>{
    const [views, setViews ] = useState();
    const [videoPublishedAt, setVideoPublishedAt ] = useState();
    const getSingleVideoData = async(videoId)=>{
       const response = await fetch(YOUTUBE_SINGLE_VIDEO_API+`${videoId}&key=${GOOGLE_API_KEY}`);
       const json = await response.json();
    //    const { statistics, snippet } = json.items[0];
    //    console.log(json.items[0]);
    //    const { viewCount } = statistics;
    //    const { publishedAt } = snippet;
    //    setViews(millify(viewCount,{precision: 1}));
    //    setVideoPublishedAt(publishedAt);
    }

    useEffect(()=>{
        getSingleVideoData(videoId);
    },[])

    return {views, videoPublishedAt}
}

export default useVideoData;