import React, { useState } from 'react';
import Comments from './Comments';
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import Moment from 'react-moment';
const Comment = ({ commentData })=>{
    const [showReplies, setShowReplies] = useState(false);
    const { kind } = commentData;
    if(kind === "youtube#commentThread"){
        const {textOriginal, authorProfileImageUrl, authorDisplayName, publishedAt} = commentData?.snippet?.topLevelComment?.snippet;
        const {replies} = commentData;

        return (
            <div className="flex py-4">
                {authorProfileImageUrl ? <img alt="user" src={authorProfileImageUrl} className="w-12 h-12 rounded-full" /> : 
                    <FaUserCircle className='text-lg text-gray-100' />
                }
                <div className='ml-6'>
                    <p className='text-sm font-semibold'>{authorDisplayName}
                        <span className='text-xs text-gray-500 ml-2'><Moment fromNow>{publishedAt}</Moment></span>
                    </p>
                    <p>{textOriginal}</p>
                    {replies && <h3 className='flex items-center cursor-pointer text-[#065fd4] font-medium' onClick={()=> setShowReplies((prev)=> !prev)}>{showReplies ? <IoMdArrowDropup className='inline text-lg' />: <IoMdArrowDropdown className='inline text-lg' />}{replies.comments.length} replies</h3>}
                    {showReplies && <Comments data={replies?.comments} />}
                </div>
            </div>
        )
    }

    if(kind === "youtube#comment"){
        const {textOriginal, authorProfileImageUrl, authorDisplayName, publishedAt} = commentData?.snippet;
        const { replies } = commentData;

        return (
            <div className="flex py-4">
                <img alt="user" src={authorProfileImageUrl} className="w-12 h-12 rounded-full" />
                <div className='ml-6'>
                <p className='text-sm font-semibold'>{authorDisplayName}
                    <span className='text-xs text-gray-500 ml-2'><Moment fromNow>{publishedAt}</Moment></span>
                </p>
                <p>{textOriginal}</p>
                {replies && <h3 className='flex items-center cursor-pointer text-[#065fd4] font-medium' onClick={()=> setShowReplies((prev)=> !prev)}>{showReplies ? <IoMdArrowDropup className='inline text-lg' />: <IoMdArrowDropdown className='inline text-lg' />}{replies.comments.length} replies</h3>}
                {showReplies && <Comments data={replies?.comments} />}
                </div>
            </div>
        )
    }
}

export default Comment;