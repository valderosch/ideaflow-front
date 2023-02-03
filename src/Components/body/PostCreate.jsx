import React, { useRef } from "react";
import axios from 'axios';

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
        <div className="card-body">
            <h2 className="card-title">Whats new?</h2>
            <form>
                <input type="text" name="title" ref={titleElement} placeholder="Title"/>
                <input type="texarea" name="description" ref={descriptionElement} placeholder="Description"/>
                <input type="text" name="author" ref={authorElement} placeholder="author"/>
                <button className="button" onClick={HandleClick}>Post</button>
            </form>
        </div>
    );
}

export default PostCreate;