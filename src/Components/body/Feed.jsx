import React from "react";
import axios from 'axios';

export const api = axios.create( {
    GETALL_URL: 'http://localhost:8080/api/posts'
})

const Feed = async(pageParam = 1, options={}) => {

}

export default Feed;