import React, { useRef, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const CREATE_URL = "http://localhost:8080/api/posts";


const PostCreate  = () => {
    const titleElement = useRef(null);
    const descriptionElement = useRef(null);
    const authorElement = useRef(null);

    function HandleClick(e){
        e.preventDefault();
        console.log("Fetching port:8080/api/posts::NEW");
        console.log(titleElement.current.value);
        const data = {
            title: titleElement.current.value,
            description: descriptionElement.current.value,
            author: authorElement.current.value
        }
        axios
            .post(CREATE_URL, data)
            .then(responce => {
                console.log("Successed to add new post\n" + responce.data)
            }).catch(e => {
                console.log(e);
            })
    }

    return(
        <div className="form-body">
            <h2 className="form-text">Whats new?</h2>
            <form>
                <input type="text" name="form-title" ref={titleElement} placeholder="How its would be named?" required/>
                <input type="texarea" name="form-description" ref={descriptionElement} placeholder="About your Idea"/>
                <input type="text" name="form-author" ref={authorElement} placeholder="author"/>
                <button className="form-button" onClick={HandleClick}>Post</button>
            </form>
        </div>
    );
}

export default PostCreate;