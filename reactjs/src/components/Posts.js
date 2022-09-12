export const Posts = ({posts}) => (
    <div>
        {
            posts 
            ? posts.map(post => <Post key={post.id} {...post}/>)
            : <h3>Loading Posts</h3>
        }
    </div>
)

const Post = ({id, title, body}) => (
    <div style={{
        border: "1px solid #F08080",
        padding: "10px",
        margin: "10px",
        textAlign: "center"
    }}>
        <p>ID : {id}</p>
        <p>TITLE : {title}</p>
        <p>BODY : {body}</p>
    </div>
)