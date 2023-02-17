import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../../styles/Body/post/PostOpen.scss";

const LOAD_URL = "http://localhost:8080/api/posts";

const PostOpen = () => {
   const[post, setPost] = useState({
      title: "",
      description: "",
      author: ""
   });

   const {id} = useParams();

   useEffect(() => {
      loadPost();
   }, [])

   const loadPost = async() => {
      const result = await axios.get(`${LOAD_URL}/${id}`)
      setPost(result.data);
   }

   return(
      <div className="post">
         <Link to={"/"} className="back-link">{"<"} Back</Link>
         <h1 className="post-title">{post.title}</h1>
         <p className="post-description">{post.description}</p>
         <p className="post-author"><i>{post.author}</i></p>
      </div>
   );
}

export default PostOpen