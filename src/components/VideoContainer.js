import React, { useEffect, useState } from 'react';
import VideoCard from './VideoCard';
import { GOOGLE_API_KEY, YOUTUBE_VIDEOS_API } from '../utils/constants';
import { videoCardWithLive } from './VideoCard';
import { useSelector } from 'react-redux';

const VideoContainer = ()=>{
    const [ videos, setVideos ] = useState([]);
    const videoCategory = useSelector((store)=> store.videoCategory.category);
    const darkMode = useSelector((store)=> store.theme.darkMode);
    const VideoCardWithLive = videoCardWithLive(VideoCard);
    const getVideos = async()=>{
       try{
            const response = await fetch(YOUTUBE_VIDEOS_API+`${videoCategory}&maxResults=50&key=${GOOGLE_API_KEY}`);
            const data = await response.json();
            console.log(data)
            const videos = data?.items?.map((item)=>{
                const { channelTitle, title, thumbnails, liveBroadcastContent:isLive } = item?.snippet;
                const { url:img } = thumbnails.medium;
                const id = item?.id;
                return {channelTitle, title, img, id, isLive };
            })

            setVideos(videos);

        }catch(error){
        console.log(error);
    }
    }

    useEffect(()=>{
        getVideos();
    },[videoCategory]);

    if(videos?.length === 0){
        return <h2>Loading</h2>
    }


    return (
        <div className="flex flex-wrap gap-4">
            {videos?.map((item, index)=>{
                if(item.isLive === "live"){
                    return <VideoCardWithLive videoInfo={item} darkMode={darkMode} />
                }
                else
                return <VideoCard key={`item.id${index}`} videoInfo={item} darkMode={darkMode} />
            })}
        </div>
    )
}

export default VideoContainer;