import React from "react";
import axios from 'axios';
import {  Link, useNavigate, useParams } from "react-router-dom";
import "../../styles/Body/PostList.scss";

const Post = React.forwardRef(({post}, ref) => {

    const GETALL_URL = "http://localhost:8080/api/posts";
    const nav = useNavigate();

    // Service consts
    const openPost = (id) => {
        console.log("clicked post");
        return(
            <div className="post">
                {nav(`/posts/${id}`)}
            </div>
        );
    }

    const deletePost = async(id) => {
        await axios
        .delete(`${GETALL_URL}/delete/${id}`)
    };

    const postBody = (
        <>
            <div className="post"> 
                    <div className="image"></div>
                    <h2 className="post_title" onClick={() => openPost(post.id)}>{post.title}</h2>  
                    <span>{post.author}</span>
                    <button className="post_delete" onClick = {() => deletePost(post.id)}>x</button>
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