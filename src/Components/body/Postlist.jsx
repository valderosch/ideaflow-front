import React from "react";
import "../../styles/Post.scss";
import { useState, useEffect } from "react";
import axios from 'axios';
import {  Link, useParams } from "react-router-dom";

const GETALL_URL = "http://localhost:8080/api/posts"; 


//Main components
const Postlist = () => {
    const [posts, setPosts] = useState([]);
    const {id} = useParams()

    useEffect(() => {
        loadPosts();
    }, [])


    const loadPosts = async() => {
        const posts = await axios.get(GETALL_URL)
        .catch(e => {
            console.log(e);
        });
        setPosts(posts.data);
        console.log("Main | Getting all Posts from port:8080...")
        console.log(posts.data);
    }

    const deletePost = async(id) => {
        await axios
        .delete(`${GETALL_URL}/delete/${id}`)
        loadPosts();
     };

   
    const openPost = (id) => {
        console.log("clicked post");
        return(
            <div className="post">
                <h4 className="post_title">{}</h4>
                <p className="post_description">{}</p>
                <p className="author">{}</p>
            </div>
        );
    }

    return(
        <div className="postlist">
            {posts.map((data) => (
                 <div className="post" key={data.id} onClick={openPost}> 
                 <h2 className="post__title">{data.title}</h2>
                 <p>{data.decription}</p>
                 <span>{data.author}</span>
                 <button className="post_delete" onClick = {() => deletePost(data.id)}>{data.id} DELETE</button>
                 <Link className="post_delete" to={`/edit/${data.id}`}> EDIT</Link>
                 <Link className="post_open" to={`/posts/${data.id}`}> OPEN</Link>
             </div>   
            ))}
        </div>
    );
}

export default Postlist;