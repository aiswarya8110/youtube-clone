import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from '../utils/navSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';
import { YOUTUBE_SINGLE_VIDEO_API } from '../utils/constants';
import { GOOGLE_API_KEY } from '../utils/constants';
import { addCurrentlyPlayingVideo } from '../utils/videoSlice';
import PopularVideos from './PopularVideos';
const WatchPage = ()=>{
    const dispatch = useDispatch();
    const video = useSelector((store)=> store.video.currentlyPlayingVideo);
    const darkMode = useSelector((store)=> store.theme.darkMode);
    const [ searchParams ] = useSearchParams();
    const videoId = searchParams.get("v");
    const { title, channelTitle, publishedAt, thumbnails } = video?.snippet || {};
    const { url } = thumbnails?.medium || {};
    const getSingleVideo = async()=>{
       const response = await fetch(`${YOUTUBE_SINGLE_VIDEO_API}${videoId}&key=${GOOGLE_API_KEY}`);
       const data = await response.json();
       dispatch(addCurrentlyPlayingVideo(data?.items[0]));
    }

    useEffect(()=>{
        dispatch(toggleSidebar(false))
    },[]);

    useEffect(()=>{
        getSingleVideo();
    },[videoId]);

    return (
        <div className={`pt-5 flex flex-row col-span-11 ${darkMode && 'bg-black text-white transition-all'}`}>
            <div className='px-5 flex flex-col w-[70%]'>
                <iframe className='w-full h-[600px] rounded-3xl' src={`https://www.youtube.com/embed/${videoId}?si=UCAMibsOGn3rh90B`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <h2 className='text-xl font-bold py-3'>{title}</h2>
                <div className='flex justify-between'>
                    <div className='flex'>
                        <img src={url} alt="channel-img" className='h-12 w-12 rounded-full' />
                        <div className='ml-3'>
                            <h4>{channelTitle}</h4>
                        </div>
                    </div>
                    <div>
                        like
                    </div>
                </div>
                <CommentsContainer />
            </div>
            <div className='flex flex-col w-[30%]'>
                {video?.snippet.liveBroadcastContent === "live" && <LiveChat />}
                <PopularVideos />
            </div>
            
        </div>
    )
}

export default WatchPage;