import React from "react";
import {useState} from 'react';
import Data from "../../mock.json";
import "../../styles/Header/searchbar/SearchBar.scss";

// Searchbar Component
const SearchBar = () => {
  const [query, setQuery] = useState("")
  return (
    <div>
        <input placeholder="Enter Post Title" onChange={event => setQuery(event.target.value)} />
        {
          Data.filter(post => {
            if (query === '') {
              return null;
            } else if (post.title.toLowerCase().includes(query.toLowerCase())) {
              return post;
            }
          }).map((post, index) => (
            <div className="box" key={index}>
              <p>{post.title}</p>
              <p>{post.author}</p>
            </div>
          ))
        }
    </div>
  )
}
export default SearchBar;
