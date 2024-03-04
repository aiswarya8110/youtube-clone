import React from 'react';
import { Link } from 'react-router-dom';
import trimTitle from '../utils/trimTitle';
import useVideoData from '../utils/hooks/useVideoData';
import Moment from 'react-moment';
const VideoCard = ({ videoInfo, darkMode })=>{
    
    const { title, img, id, channelTitle } = videoInfo;
    const { videoId } = id;
    const {views, videoPublishedAt } = useVideoData(videoId);
    return (
        <Link to={`/watch?v=${videoId}`}>
            <div className={`w-[350px] ${darkMode && 'text-white'}`}>
                <img src={img} alt="video" className='rounded-lg object-cover w-full h-40' />
                <p className='font-bold py-2 text-md'>{trimTitle(title)}</p>
                <p>{channelTitle}</p>
                {views && <p className='inline'>{views}views . </p>}
                {videoPublishedAt && (
                    <p className='inline'><Moment fromNow>{videoPublishedAt}</Moment></p>
                )}
            </div>
        </Link>
    )
};

export  const videoCardWithLive = (VideoCard)=>{
    return ({ videoInfo, darkMode })=>{
        return (
            <div className={`relative ${darkMode &&  'text-white'}`}>
                <VideoCard videoInfo={videoInfo} darkMode={darkMode} />
                <div className="font-semibold rounded-e-3xl p-2 bg-red-600 text-white absolute top-0 left-0">Live </div>
            </div>
        )
    }
}

export default VideoCard;