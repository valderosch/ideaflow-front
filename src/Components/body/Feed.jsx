import React from "react";
import axios from 'axios';

export const api = axios.create( {
    GETALL_URL: 'http://localhost:8080/api'
})

const Feed = async(pageParam = 1, options={}) => {
    const response = await api.get(`/posts?_page=${pageParam}`, options)
    return response.data;
}

export default Feed;