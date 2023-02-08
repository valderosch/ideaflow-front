import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

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
      <div>
         <Link to={"/"}>{"<"} Back</Link>
         <h1>{post.title}</h1>
         <p>{post.description}</p>
         <p><i>{post.author}</i></p>
      </div>
   );
}

export default PostOpen