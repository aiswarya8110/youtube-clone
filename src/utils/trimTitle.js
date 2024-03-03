const trimTitle = (title)=>{
    return title.length > 50 ? `${title.slice(0, 50)}...` : title;
}

export default trimTitle;