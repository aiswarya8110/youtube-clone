const ChatMessage = ({ name, message })=>{
    return (
        <div className="flex items-center p-2">
            <img className="h-8" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="user" />
            <span className="font-normal px-2 text-gray-700">{name}</span>
            <span>{message}</span>
        </div>
    )
}

export default ChatMessage;