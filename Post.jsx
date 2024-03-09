/* eslint-disable react/prop-types */
export default function Post({post}){
    const {userId, id, title, body} = post;
    return (
        <div className="postBox">
            <h3>UserId: {userId}</h3>
            <h3>Id: {id}</h3>
            <h3>Title: {title}</h3>
            <h3>Description: {body}</h3>
        </div>
    )
}