import React from "react";
import "../../styles/Post.scss";
import { useState, useEffect } from "react";
import axios from 'axios';

const GETALL_URL = "http://localhost:8080/api/posts"; 

//Main components
const Postlist = () => {
    const [postList,  updatePostList] = useState([]);

    useEffect(() => {
        console.log("Getting all posts for main page from port:8080...");
        axios
            .get(GETALL_URL)
            .then(response => {
                updatePostList(response.data); 
                console.log(response.data); 
                
            })
            .catch(e => {
                console.log(e);
            })
    }, [])
    return(
        <div className="postlist">
            {postList.map((data) => (
                <div className="post" key={data.id}> 
                    <h2 className="post__title">{data.title}</h2>
                    <p>{data.decription}</p>
                    <span>{data.author}</span>
                </div>
            ))}
            
        </div>
    );
}

export default Postlist;