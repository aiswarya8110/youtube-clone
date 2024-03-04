import { FaUserCircle } from "react-icons/fa";
const ChatMessage = ({ name, message, darkMode })=>{
    return (
        <div className={`flex items-center p-2 text-gray-700 ${darkMode && 'text-white'}`}>
            {darkMode ? <FaUserCircle className="text-xl text-white"/> : <FaUserCircle  className="text-xl text-black"/>}
            <span className="font-semibold px-2">{name}</span>
            <span className="text-sm">{message}</span>
        </div>
    )
}

export default ChatMessage;