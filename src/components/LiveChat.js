import React, { useEffect, useState } from 'react';
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addChat } from '../utils/chatSlice';
import generateNames from '../utils/helper';
import rnd from '../utils/generateRandomText';
const LiveChat = ()=>{
    const [ chatText, setChatText] = useState("");
    const [showChat, setShowChat ] = useState(true);
    const dispatch = useDispatch();
    const { chats } = useSelector((store)=> store.chats);
    const darkMode = useSelector((store)=> store.theme.darkMode);
    useEffect(()=>{
       const timer = setInterval(()=>{
            dispatch(addChat({
                name: generateNames(),
                text: rnd(12)
            }))
        }, 500)

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
        <div className={`relative w-[90%] border border-gray-200 rounded-t-3xl ${!showChat && 'rounded-b-3xl'} ${darkMode && 'text-black border-slate-800'}`}>
            <div className={`bg-white p-3 rounded-t-3xl flex justify-between ${!showChat && 'rounded-b-3xl'}`}>
                <h3 className='text-xl font-normal'>Top Chats</h3>
                <button onClick={()=> setShowChat((prev)=> !prev)}>{showChat ? 'Hide chat' : 'Show chat'}</button>
            </div>
            {
                showChat && (
                    <>
                        <div className={`pl-2 h-[600px] overflow-hidden overflow-y-scroll flex flex-col-reverse bg-gray-100 no-scrollbar ${darkMode && 'bg-gray-900 text-black'}`}>
                            {chats.map((chat)=> <ChatMessage name={chat.name} message={chat.text} darkMode={darkMode} />)}
                        </div>
                        <form className='absolute bottom-0 left-0 right-0 w-full flex' onSubmit={sendChat}>
                                <input className='w-full p-3 outline-none' type="text" placeholder="send chat" value={chatText} onChange={(e)=> setChatText(e.target.value)}/>
                                <button type="submit" className='w-1/4 p-3 bg-gray-200'>send chat</button>
                        </form>
                    </>
                )
            }
        </div>
    )
}

export default LiveChat;