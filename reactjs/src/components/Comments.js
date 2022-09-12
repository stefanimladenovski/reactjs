import { API_URL, COMMENTS_SIZE } from "../utils/constants";
import { useEffect, useState } from "react";

export const Comments = () => {
    const [comments, setComments] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${API_URL}/comments?_limit=${COMMENTS_SIZE}`)
            const data = await response.json()
            // await new Promise((r) => setTimeout(r, 2000))
            setComments(data)
        }

        fetchData()
    }, [])

    return(
        <div>
            {
                comments
                ? comments.map(comment => <Comment key={comment.id} {...comment}/> )
                : <h3>Loading Comments</h3>
            }
        </div>
    )
}

const Comment = ({id, name, email, body}) => (
    <div style={{
        border: "1px solid #9370DB",
        padding: "10px",
        margin: "10px",
        textAlign: "center"
    }}>
        <p>ID : {id}</p>
        <p>NAME :{name}</p>
        <p>EMAIL : {email}</p>
        <p>BODY : {body}</p>
    </div>
)