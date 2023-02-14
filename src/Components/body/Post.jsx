import React from "react";
import {  Link, useNavigate, useParams } from "react-router-dom";
import "../../styles/Body/PostList.scss";

const Post = React.forwardRef(({post}, ref) => {

    const postBody = (
        <>
            <div className="post" key={post.id}> 
                    <h2 className="post_title" onClick={() => this.openPost(post.id)}>{post.title}</h2>
                    <p>{post.decription}</p>
                    <span>{post.author}</span>
                    <button className="post_delete" onClick = {() => this.deletePost(post.id)}>x</button>
                    <Link className="post_edit" to={`/edit/${post.id}`}>EDIT</Link>
                    <div className="boxxx"></div>
                </div>  
        </>
    )

    const content = ref ? 
    <article ref={ref}>{postBody}</article> : <article>{postBody}</article> 

    return content;
})

export default Post;