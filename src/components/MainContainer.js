import React from 'react';
import ButtonList from './ButtonList';
import VideoContainer from './VideoContainer';
import { useSelector } from 'react-redux';
const MainContainer = ()=>{
    const darkMode = useSelector((store)=> store.theme.darkMode);
    return (
        <div className={`p-5 col-span-9 ${darkMode && 'bg-black'}`}>
            <ButtonList />
            <VideoContainer />
        </div>
    )
};

export default MainContainer;