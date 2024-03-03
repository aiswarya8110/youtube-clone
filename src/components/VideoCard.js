import React from 'react';
import { Link } from 'react-router-dom';
import trimTitle from '../utils/trimTitle';
import useVideoData from '../utils/hooks/useVideoData';
import Moment from 'react-moment';
const VideoCard = ({ videoInfo })=>{
    const { title, img, id, channelTitle } = videoInfo;
    const { videoId } = id;
    // console.log(videoInfo)
    const {views, videoPublishedAt } = useVideoData(videoId);
    return (
        <Link to={`/watch?v=${videoId}`}>
            <div className="p-2 m-2 w-[500px]">
                <img src={img} alt="video" className='rounded-lg object-cover w-full h-60' />
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
    return ({ videoInfo })=>{
        return (
            <div>
                <VideoCard videoInfo={videoInfo} />
                <h2 className="font-bold pl-4">🔴Live </h2>
            </div>
        )
    }
}

export default VideoCard;