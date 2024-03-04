import React from 'react'
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import millify from 'millify';

const VideoCardTwo = ({ videoInfo }) => {
    const { thumbnails, title, channelTitle, publishedAt } = videoInfo.snippet;
    const { viewCount } = videoInfo?.statistics || {};
    const id = videoInfo.id.videoId ? videoInfo.id.videoId : videoInfo.id;

  return (
    <Link to={`/watch?v=${id}`}>
        <div className="flex mb-4 items-center">
            <img src={thumbnails.medium.url} alt="video-img" className="w-[200px] h-[100px] object-cover rounded-lg"/>
            <div className="ml-1 p-2 flex-1">
                <h3 className="text-sm font-semibold">
                    {title}
                    {/* {getTitle(title)} */}
                </h3>
                <p className='mt-1 text-xs'>{channelTitle}</p>
                <p className='mt-1 text-sm'>{millify(viewCount, {precision: 1})} views . <Moment fromNow>{publishedAt}</Moment></p>
            </div>
        </div>
    </Link>
  )
}

export default VideoCardTwo