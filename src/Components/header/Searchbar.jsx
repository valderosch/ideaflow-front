import React from "react";
import {useState, useEffect} from 'react';
import axios from 'axios';

const GETALL_URL = "http://localhost:8080/api/posts";

// Searchbar Component
const SearchBar = () => {
  const [query, setQuery] = useState("");
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
            <div className="box" key={index}>
              <p className="title">{post.title}</p>
              <p className="author">{post.author}</p>
            </div>
          ))
        }
    </div>
  )
}
export default SearchBar;
