import React, { useEffect, useRef, useState } from "react";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

const EDIT_URL = "http://localhost:8080/api/posts/edit";
const LOAD_URL = "http://localhost:8080/api/posts";


const PostEdit  = () => {
    const {id} = useParams();
    const nav = useNavigate();

    const[post, setPost] = useState({
        title: "",
        description: "",
        author: ""
    });
    const{title,description,author} = post
    const onInputChange = (e) => {
        setPost({...post, [e.target.name]: e.target.value});   
    }

    useEffect(() => {
        loadPost();
    }, [])

    const HandleClick = async(e) => {
        e.preventDefault();
        console.log("Fetching port:8080/api/posts::NEW");
        await axios.put(`${EDIT_URL}/${id}`, post) 
        .catch(e => {
            console.log(e);
        })
        nav("/");

    }

    const loadPost = async() => {
        const result = await axios.get(`${LOAD_URL}/${id}`);
        setPost(result.data);
    }

    return(
        <div className="card-body">
            <h2 className="card-title">Something must be another?</h2>
            <form>
                <input type="text" name="title" placeholder="Title" value={post.title} onChange={(e) => onInputChange(e)}/>
                <input type="texarea" name="description" placeholder="Description" value={post.description} onChange={(e) => onInputChange(e)}/>
                <input type="text" name="author" placeholder="author" value={post.author} onChange={(e) => onInputChange(e)}/>
                <button className="button" onClick={(e) => HandleClick(e)}>Change</button>
            </form>
        </div>
    );
}

export default PostEdit;