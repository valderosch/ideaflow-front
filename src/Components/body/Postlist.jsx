import React from "react";
import "../../styles/Body/PostList.scss";
import { useState, useEffect } from "react";
import axios from 'axios';
import {  Link, useNavigate, useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component"
import { useInfiniteQuery } from "react-query";
import PostFilter from "./PostFilter.jsx";

const GETALL_URL = "http://localhost:8080/api/posts"; 


const fetchPosts = async ({ pageParam = 1 }) => {
    const response = await fetch(
    `http://localhost:8080/api/posts?page=${pageParam}&limit=10`);
    const results = await response.json();
    return { results, nextPage: pageParam + 1, totalPages: 100 };
  };

//Main components
const Postlist = () => {
    const [posts, setPosts] = useState([]);
    const {id} = useParams()
    const nav = useNavigate();

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
                {nav(`/posts/${id}`)}
            </div>
        );
    }

    return(
        <div className="postlist">
            <PostFilter/>
            {posts.map((data) => (
                //infinite scroll new 
                 <div className="post" key={data.id}> 
                    <div className="image"></div>
                    <h2 className="post__title" onClick={() => openPost(data.id)}>{data.title}</h2>
                    <p>{data.decription}</p>
                    <span>{data.author}</span>
                    <button className="post_delete" onClick = {() => deletePost(data.id)}>x</button>
                    <Link className="post_edit" to={`/edit/${data.id}`}>EDIT</Link>
                    <div className="boxxx"></div>
                </div>   
            ))}
        </div>
    );
}

export default Postlist;