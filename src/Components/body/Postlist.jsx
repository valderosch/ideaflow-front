import React from "react";
import "../../styles/Post.scss";
import { useState, useEffect } from "react";
import axios from 'axios';
import { BrowserRouter, Route, useParams } from "react-router-dom";

const GETALL_URL = "http://localhost:8080/api/posts"; 
const GETBYID_URL = "http://localhost:8080/api/posts/{id}";

const deletePost = async(id) => {
    await axios
    .delete(`http://localhost:8080/api/posts/${id}`)
    .then(responce => {
        updatePostList(responce.data);
        console.log(responce.data);
    })
 };

//Main components
const Postlist = () => {
    const [postList,  updatePostList] = useState([]);
    const [posts, setPosts] = useState([]);

    const {id} = useParams()

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
            {postList.map((data) => (
                <div className="post" key={data.id} onClick={<openPost/>}> 
                    <h2 className="post__title">{data.title}</h2>
                    <p>{data.decription}</p>
                    <span>{data.author}</span>
                    <button className="post_delete" onClick = {() => deletePost(this.data.id)}>{data.id} DELETE</button>
                </div>
            ))}
        </div>
    );
}

export default Postlist;