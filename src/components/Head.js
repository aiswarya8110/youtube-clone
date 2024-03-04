import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaMagnifyingGlass, FaMoon, FaSun } from "react-icons/fa6";
import { HiBars3 } from "react-icons/hi2";
import { FaUserCircle } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';
import { toggleSidebar } from '../utils/navSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheSearchResults } from '../utils/searchSlice';
import { GoBell } from "react-icons/go";
import { MdOutlineVideoCall } from "react-icons/md";
import { toggleDarkMode, updateDarkMode } from '../utils/themeSlice';

const Head = ()=>{
    const [ searchQuery, setSearchQuery ] = useState("");
    const [ suggestions, setSuggestions ] = useState([]);
    const [ showSuggestion, setShowSuggestion ] = useState(false);
    const { menuOpen } = useSelector((store)=> store.nav);

    const cachedSearchResults = useSelector((store)=> store.search);
    const darkmode = useSelector((store)=> store.theme.darkMode);
    const dispatch = useDispatch();

    const hideDropDown = ()=>{
        setTimeout(()=>{
            setShowSuggestion(false);
        },300);
    }

    const toggleTheme = ()=>{
        dispatch(toggleDarkMode());
    }


    const fetchAutoSuggestions = async()=>{
        try{
            const response = await fetch('https://cors-anywhere.herokuapp.com/'+YOUTUBE_SEARCH_API+searchQuery);
            const data = await response.json();
            setSuggestions(data[1]);
            dispatch(cacheSearchResults({[searchQuery]: data[1]}))
        }
        catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        const timer = setTimeout(()=>{
            if(cachedSearchResults[searchQuery]){
                setSuggestions(cachedSearchResults[searchQuery]);
            }
            else{
                fetchAutoSuggestions();
            }
        }, 200);

        return ()=> {
            clearTimeout(timer);
        }

    },[searchQuery]);

    return (
        <div className={`grid grid-flow-col p-5 ${darkmode && 'bg-gray-900 text-white transition-all'}`}>
            <div className='flex items-center col-span-1'>
                <HiBars3 className="cursor-pointer text-3xl" 
                onClick={()=> dispatch(toggleSidebar(!menuOpen))}/>
                <Link to='/'><img className='h-8 ml-4' src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/753px-Logo_of_YouTube_%282015-2017%29.svg.png" alt="logo"/></Link>
            </div>
            <div className="col-span-10">
                <div className='relative w-1/2'>
                    <input value={searchQuery} onFocus={()=> setShowSuggestion(true)} onBlur={hideDropDown} onChange={(e)=> setSearchQuery(e.target.value)} type="text" className={`px-4 py-2 w-full border border-gray-400 rounded-l-3xl rounded-r-3xl outline-none ${darkmode && 'text-black'}`} placeholder='Search' />
                    <button className='flex justify-center items-center border border-gray-400 rounded-r-3xl p-2 absolute right-0 bottom-0 top-0 w-1/12 bg-gray-200'><FaMagnifyingGlass className='text-slate-900 text-xlg' /></button>
                    {showSuggestion && (
                    <div className={`mt-3 absolute top-full left-0 w-full rounded-3xl ${darkmode ? 'bg-black' : 'bg-white'}`}>
                        <ul>
                            {suggestions?.map((item)=><Link to={`/search/${item}}`}>
                                <li key={item} className={`px-4 font-normal py-2 shadow-sm transition ${darkmode ? 'hover:bg-slate-800' : 'hover:bg-gray-100'}`}>
                                    {item}
                                </li>
                            </Link>)}
                        </ul>
                    </div>
                    )}
                </div>
            </div>
            <div className='col-span-1 flex items-center'>
                <button onClick={toggleTheme}>{darkmode ? <FaMoon className='text-2xl h-8 mr-4'/> : <FaSun className='text-2xl h-8 mr-4' />}</button>
                <MdOutlineVideoCall className='text-4xl h-8 mr-4'/>
                <GoBell className='text-2xl h-8 mr-4'/>
                <FaUserCircle className='text-2xl h-8'/>
            </div>
        </div>
    )
};

export default Head;



/* 
 iphone    iphone       iphone 14  iphone 14 
 iphone12  iphone 12    iphone 15  iphone 15
 iphone13  iphone 13    iphone 13  iphone 13


*/