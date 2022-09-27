import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchPosts } from "../slices/postsSlice"

export const Posts = () => {

    const { posts, status, error } = useSelector(state => state.posts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])

    return <div>
        <h2>STATUS : {status}</h2>
        <h2>ERROR : {error}</h2>

        <pre>{JSON.stringify(posts, null, 2)}</pre> 
    </div>
}