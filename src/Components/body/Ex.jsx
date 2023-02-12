import { useState, useRef } from "react";
import usePosts from "../../hooks/usePosts";
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

    const lastPostRef = useRef();

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