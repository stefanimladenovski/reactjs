import { useState } from "react";
import { mockTodos } from "../mockData"
import { ListTodos } from "./ListTodos"
import { CreateTodo } from "./CreateTodo";

export const Todo = () => {

    const [todos, setTodos] = useState(mockTodos)

    const addTodo = (text) => {
        if(text.trim() === '') {     //.trim e za da nemoze da se vnesuva prazno mesto
            alert("NO EMPTY Todos");
            return
        };

        const newTodo = {
            id: Date.now(),
            text,
            completed: false,
        };

        setTodos([...todos, newTodo]);
    }

    const markAsCompleted = (id) => {
      //  todos.find(todo => todo.id === id)    //find e pobrzo od filter ako barame edno nesto zatoa sto bara dodeka ne go najde prbvoto a filter gi pominuva site
        
        setTodos ( [...todos.map(todo => {
            if( todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        })])
    }

    const changeText = (id, newTextValue) => {
        setTodos([...todos.map(todo => {
            if(todo.id === id) {
                todo.text = newTextValue
            }
            return todo
        })])
    }

    const deleteTodo = (id) => {
        setTodos([...todos.filter(todo => todo.id !== id)])
    }

    return <div>
        <CreateTodo addTodo={addTodo}/>
        <ListTodos 
        todos={todos} 
        markAsCompleted = {markAsCompleted} 
        deleteTodo = {deleteTodo} 
        changeText = {changeText}
        />
    </div>
}