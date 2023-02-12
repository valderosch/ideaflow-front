import React from "react";
import {useState, useEffect} from 'react';
import {  Link, useNavigate, useParams } from "react-router-dom";
import axios from 'axios';

const GETALL_URL = "http://localhost:8080/api/posts";

// Searchbar Component
const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [postList,  updatePostList] = useState([]);
  const nav = useNavigate();


  useEffect(() => {
    console.log("Getting all posts for searchbar from port:8080...");
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
            {nav(`/posts/${id}`)}
        </div>
    );
}

  return (
    <div className="searchbar">
        <input className="input" placeholder="Search Topics" onChange={event => setQuery(event.target.value)} />
        {
          postList.filter(post => {
            if (query === '') {
              return null;
            } else if (post.title.toLowerCase().includes(query.toLowerCase())) {
              return post;
            }
          }).map((post, index) => (
            <div className="box" key={index} onClick={() => openPost(post.id)}>
              <p className="title">{post.title}</p>
              <p className="author">{post.author}</p>
            </div>
          ))
        }
    </div>
  )
}
export default SearchBar;
