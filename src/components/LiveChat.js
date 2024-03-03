import React, { useEffect, useState } from 'react';
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addChat } from '../utils/chatSlice';
import generateNames from '../utils/helper';
const LiveChat = ()=>{
    const [ chatText, setChatText] = useState("");
    const dispatch = useDispatch();
    const { chats } = useSelector((store)=> store.chats);
    useEffect(()=>{
       const timer = setInterval(()=>{
            dispatch(addChat({
                name: generateNames(),
                text: "Lorem Ipsum dolor Site Amet"
            }))
        }, 2000)

        return ()=> clearInterval(timer)
    },[])

    const sendChat = (e)=>{
        e.preventDefault();
        dispatch(addChat({
            name: "Aiswarya",
            text: chatText
        }))
        setChatText("");
    }

    return (
        <>
        <div className="relative h-[600px] w-full ml-2 p-2 border border-gray-200 bg-gray-100 overflow-hidden overflow-y-scroll rounded-3xl no-scrollbar flex flex-col-reverse">
            <div className='absolute top-0 left-0 right-0 bg-white p-5'>
                <h3 className='text-xl font-normal'>Top Chats</h3>
            </div>
            {chats.map((chat)=> <ChatMessage name={chat.name} message={chat.text} />)}
            <form className='absolute bottom-0 left-0 right-0 flex' onSubmit={sendChat}>
                <input className='w-full p-3 outline-none' type="text" placeholder="send chat" value={chatText} onChange={(e)=> setChatText(e.target.value)}/>
                <button type="submit" className='w-1/4 p-3 bg-gray-200'>send chat</button>
            </form>
        </div>
        
        </>
    )
}

export default LiveChat;