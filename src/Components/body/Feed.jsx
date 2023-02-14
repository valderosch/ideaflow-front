import { useState, useRef, useCallback } from "react";
import { useInfiniteQuery } from "react-query";
import Post from "./Post";
import axios from 'axios'
import { getPosts } from './Axios'
import "../../styles/Body/post/Post.scss";
import { useNavigate } from "react-router-dom";

const GETALL_URL = "http://localhost:8080/api/posts"; 

const Feed = () => {

    const nav = useNavigate();

    const {
        fetchNextPage, //function 
        hasNextPage, // boolean
        isFetchingNextPage, // boolean
        data,
        status,
        error
    } = useInfiniteQuery('/posts', ({ pageParam = 1 }) => getPosts(pageParam), {
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.length ? allPages.length + 1 : undefined
        }
    })

    const intObserver = useRef()
    const lastPostRef = useCallback(post => {
        if (isFetchingNextPage) return

        if (intObserver.current) intObserver.current.disconnect()

        intObserver.current = new IntersectionObserver(posts => {
            if (posts[0].isIntersecting && hasNextPage) {
                console.log('We are near the last post!')
                fetchNextPage()
            }
        })

        if (post) intObserver.current.observe(post)
    }, [isFetchingNextPage, fetchNextPage, hasNextPage])

    if (status === 'error') return <p className='center'>Error: {error.message}</p>

    const content = data?.pages.map(pg => {
        return pg.map((post, i) => {
            if (pg.length === i + 1) {
                return <Post ref={lastPostRef} key={post.id} post={post} />
            }
            return <Post key={post.id} post={post} />
        })
    })

    // Service consts
    const openPost = (id) => {
        console.log("clicked post");
        return(
            <div className="post">
                {nav(`/posts/${id}`)}
            </div>
        );
    }

    const deletePost = async(id) => {
        await axios
        .delete(`${GETALL_URL}/delete/${id}`)
    };

    return (
        <>
            <h1>Feed</h1>
            {content}
            {isFetchingNextPage && <p className="loading-more">Loading IDEAS. . .</p>}
            <p className="to-top"><a href="#top">to TOP ^</a></p>
        </>
    )
}
export default Feed;