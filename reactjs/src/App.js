import {useEffect, useState} from "react"

import { Input } from "./components/common/Input";

const App = () => {
  const [fieldType, setFieldType] = useState("password")

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [comment, setComment] = useState("")

  useEffect(() => {
    console.log('comment was change to ', comment)
  }, [comment])

  const onMouseDownHandler = () => {
    setFieldType("text")
  }
  const onMouseUpHandler = () => {
    setFieldType("password")
  }

  const handleSubmit = (event) => {
    event.preventDeafult()
    console.log({
      username,
      password,
      comment
    })
  }

  return (<>

    <form onSubmit={handleSubmit}>

      <Input
        type="text"
        name="username"
        placeholder="Please enter Username"
        value={username}
        onChange={ (event) => {setUsername(event.target.value)}}
      />

      <Input
        type={fieldType}
        name="password"
        placeholder="Please enter Password"
        mouseDown={onMouseDownHandler}
        mouseUp={onMouseUpHandler}
        value={password}
        onChange={ (event) => {setPassword(event.target.value)}}
      />
      
      <Input
        type="text"
        name="comment"
        placeholder="Please enter Comment"
        value={comment}
        onChange={ (event) => {setComment(event.target.value)}}
      />
      <br />

      <button type="submit">SUBMIT</button>
    </form>
  </>);
}

export default App
