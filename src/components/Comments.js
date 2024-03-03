import Comment from './Comment';
const Comments = ({ data })=>{
    if(!data) return;

    return (
            data.map((comment)=>{
                return <Comment commentData={comment} key={comment.id} />
            })      
    )
}

export default Comments;