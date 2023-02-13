import { useState, useRef, useCallback } from "react";
import { useInfiniteQuery } from "react-query";
import Feed  from './Feed'
import Post from "./Post";

const Ex = () => {
    const [pageNum, setPageNum] = useState(1);
    const [
        isLoading,
        isError, 
        error,
        results,
        hasNextPage
    ] = usePosts(pageNum)

    const intObserver = useRef();
    const lastPostRef = useCallback(post => {
        if(isLoading) return

        if(intObserver.current) intObserver.current.disconnect()
        intObserver.current = new IntersectionObserver(posts => {
            if(posts[0].isIntersecting && hasNextPage){
                console.log('We are near the last element')
                setPageNum(prev => prev + 1)
            }
        }) 

        if(post) intObserver.current.observe(post)
    }, [isLoading])

    if (isError) return( 
        <p className="error">Something get wrong<br/>
            Error: {error.message}
        </p>
    )

    const content = results.map((post, i) => {
        if (results.lenght === i + 1){
            console.log('last element achieved')
            return <Post ref={lastPostRef} key={post.id} post={post}/>
        }
        return <Post key={post.id} post={post}/>
    })
    
    return(
        <>
            <h1>HHH</h1>
            {content}
            {isLoading && <p className="load">Loading ideas . . .</p>}
            <p><a href="#top">Top ^</a></p>

        </>
    );
}

export default Ex;