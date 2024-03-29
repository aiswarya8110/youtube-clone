import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = ()=>{
    const { menuOpen } = useSelector((store)=> store.nav); // subscribe to specific part of the store
    const darkMode = useSelector((store)=> store.theme.darkMode);
    if(!menuOpen) return null;
    
    return (
        <div className={`p-5 shadow-lg col-span-3 ${darkMode && 'bg-gray-900 text-white transition-all'}`}>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li>Shorts</li>
                <li>Live</li>
            </ul>
            <h1 className='font-bold'>Subscriptions</h1>
            <ul className='mb-4'>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
            </ul>
            <h1 className='font-bold'>Subscriptions</h1>
            <ul className='mb-4'>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
            </ul>
            <h1 className='font-bold'>Subscriptions</h1>
            <ul className='mb-4'>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
            </ul>
        </div>
    )
}

export default Sidebar;