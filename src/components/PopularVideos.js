import { useEffect } from 'react';
import { YOUTUBE_MOST_POPULAR_VIDEOS_API } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addPopularVideos } from '../utils/videoSlice';
import VideoCardTwo from './VideoCardTwo';
const PopularVideos = ()=>{
    const dispatch = useDispatch();
    const popularVideos = useSelector((store)=> store.video.popularVideos);
    const getPopularVideos = async()=>{
        const response = await fetch(YOUTUBE_MOST_POPULAR_VIDEOS_API);
        const data = await response.json();
        dispatch(addPopularVideos(data.items));
    }
    
    useEffect(()=>{
        getPopularVideos();
    },[])

    return (
        <div>
            <h3 className='pb-3 text-2xl font-semibold'>Popular Videos</h3>
            {
                popularVideos.map((item)=><VideoCardTwo videoInfo={item} key={item.id} />)
            }
        </div>
    )
}

export default PopularVideos;