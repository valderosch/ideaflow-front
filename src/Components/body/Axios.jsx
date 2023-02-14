import React from "react";
import axios from 'axios';


export const api = axios.create({
    baseURL: 'http://localhost:8080/api'
})

export const getPosts = async (pageParam = 1, options = {}) => {
    const response = await api.get(`/posts?_page=${pageParam}`, options)
    return response.data
}