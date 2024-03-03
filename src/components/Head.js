import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaMagnifyingGlass } from "react-icons/fa6";
import { HiBars3 } from "react-icons/hi2";
import { FaUserCircle } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';
import { toggleSidebar } from '../utils/navSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheSearchResults } from '../utils/searchSlice';
import { GoBell } from "react-icons/go";
import { MdOutlineVideoCall } from "react-icons/md";

const Head = ()=>{
    const [ searchQuery, setSearchQuery ] = useState("");
    const [ suggestions, setSuggestions ] = useState([]);
    const [ showSuggestion, setShowSuggestion ] = useState(false);
    const { menuOpen } = useSelector((store)=> store.nav);

    const cachedSearchResults = useSelector((store)=> store.search);
    const dispatch = useDispatch();

    const hideDropDown = ()=>{
        setTimeout(()=>{
            setShowSuggestion(false);
        },300);
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
        <div className="grid grid-flow-col p-5">
            <div className='flex items-center col-span-1'>
                <HiBars3 className="cursor-pointer text-3xl" 
                onClick={()=> dispatch(toggleSidebar(!menuOpen))}/>
                <Link to='/'><img className='h-8 ml-4' src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/753px-Logo_of_YouTube_%282015-2017%29.svg.png" alt="logo"/></Link>
            </div>
            <div className="col-span-10">
                <div className='relative w-1/2'>
                    <input value={searchQuery} onFocus={()=> setShowSuggestion(true)} onBlur={hideDropDown} onChange={(e)=> setSearchQuery(e.target.value)} type="text" className="px-4 py-2 w-full border border-gray-400 outline-none" />
                    <button className='border border-gray-400 p-2 absolute right-0 bottom-0 top-0 w-1/5 text-center bg-gray-200'><FaMagnifyingGlass className='text-slate-900 text-xlg' /></button>
                    {showSuggestion && (
                    <div className='absolute top-full left-0 bg-white w-full'>
                        <ul>
                            {suggestions?.map((item)=><Link to={`/search/${item}}`}>
                                <li key={item} className='px-4 font-medium py-2 shadow-sm hover:bg-gray-100 transition'>
                                    {item}
                                </li>
                            </Link>)}
                        </ul>
                    </div>
                    )}
                </div>
            </div>
            <div className='col-span-1 flex '>
                <MdOutlineVideoCall className='text-4xl h-8 text-black mr-4'/>
                <GoBell className='text-2xl h-8 text-black mr-4'/>
                <FaUserCircle className='text-2xl h-8 text-black'/>
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