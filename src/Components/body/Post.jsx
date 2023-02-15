import React from "react";
import axios from 'axios';
import {  Link, useNavigate, useParams } from "react-router-dom";
import "../../styles/Body/PostList.scss";
import { useState } from "react";
import edit from "../../assets/post-dropdown/edit.png";
import del from "../../assets/post-dropdown/delete.png";


const Post = React.forwardRef(({post}, ref) => {
    const [active, setActive] = useState(false);
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

    const DropDown = () => {
        return(
            <ul className={`drop-down ${active ? 'active' : 'inactive'}`}>
                 <li className="li-edit">
                    <img src={edit} alt="edit"/>
                    <Link className="post_edit" to={`/edit/${post.id}`}>
                        edit
                    </Link>
                </li>
                <li className="li-delete">
                    <img src={del} alt="delete"/>
                    <div className="post_delete"
                        onClick = {() => deletePost(post.id)}>
                        delete
                    </div>
                </li>
            </ul>
        );
    }

    const postBody = (
        <>
            <div className="post"> 
                <div className="image"></div>
                <div className="post-content">
                    <div className="post-data">
                        <h2 className="post_title" onClick={() => openPost(post.id)}>{post.title}</h2>  
                        <span>{post.author}</span>
                    </div>
                    <div className="dropdown">
                        <DropDown/>
                        <div className="dot" onClick={() => DropDown(setActive(!active))}></div>
                    </div>
                </div>    
                <div className="boxxx"></div>
            </div>  
        </>
    )

    const content = ref ? 
    <article ref={ref}>{postBody}</article> : <article>{postBody}</article> 
    return content;
})

export default Post;