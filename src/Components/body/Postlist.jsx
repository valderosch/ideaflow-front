import React from "react";
import "../../styles/Body/PostList.scss";
import PostFilter from "./PostFilter.jsx";




const fetchPosts = async ({ pageParam = 1 }) => {
    const response = await fetch(
    `http://localhost:8080/api/posts?page=${pageParam}&limit=10`);
    const results = await response.json();
    return { results, nextPage: pageParam + 1, totalPages: 100 };
  };

//Main components
const Postlist = () => {
    return(
        <div className="postlist">
            <PostFilter/>
        </div>
    );
}

export default Postlist;