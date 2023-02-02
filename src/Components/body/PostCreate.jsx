import React from "react";

const CREATE_URL = "http://localhost:8080/api/posts";

function HandleClick(e){
    e.preventDefault();
}

const PostCreate  = () => {
    return(
        <div className="card-body">
            <h2 className="card-title">Whats new?</h2>
            <form>
                <input type="text" name="title" placeholder="Title"/>
                <input type="texarea" name="description" placeholder="Description"/>
                <input type="text" name="author" placeholder="author"/>
                <button className="button" onClick={HandleClick}>Post</button>
            </form>
        </div>
    );
}

export default PostCreate;