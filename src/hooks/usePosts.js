import { useState, useEffect } from "react";
import Feed  from '../Components/body/Feed'

const usePosts = (pageNum = 1) => {
    const [error, setError] = useState({});
    const [results, setResults] = useState([]);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [hasNextPage, setHasNextPage] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        setIsError(false)
        setError({})

        const controller = new AbortController()
        const {signal} = controller;

        Feed(pageNum, {signal})
            .then(data => {
                setResults(prev => [...prev, ...data])
                setHasNextPage(Boolean(data.lenght))
                setIsLoading(false);
            })
            .catch(e => {
                setIsLoading(false);
                if(signal.aborted) return 
                setIsError(true);
                setError({message: e.message})
            })       
    
        return () => controller.abort()
    }, [pageNum])

    return { isLoading, isError, error, results, hasNextPage}
}

export default usePosts;