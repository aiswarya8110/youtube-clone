import React from 'react';
import { useDispatch } from 'react-redux';
import { updateCategory } from '../utils/videoCategorySlice';
const Button = ({ name })=>{
    const dispatch = useDispatch();
    const handleClick = ()=>{
        dispatch(updateCategory(name));
    }

    return (
        <div>
            <button 
            className="px-5 py-2 m-2 bg-gray-200 rounded-lg" onClick={handleClick}>
                {name}
            </button>
        </div>
    )
};

export default Button;