import React, { useState } from "react";
import "./todolist.css"

const TodoList = ({data}) => {
    const [todo, setTodo] = useState(data)

    const handleClick = (idx) => {
       const todos = [...todo]
       todo[idx].completed = !todo[idx].completed
       setTodo(todos)
    }
    return todo.map((lst, idx) => {
        const check = lst.completed?"fa-check":"fa-window-close";
        return <div key={lst.name}>
                {lst.completed?lst.name:<del>{lst.name}</del>} <i className={`fa ${check}`} onClick={() =>  handleClick(idx)}></i>
            </div>
    });
}
export default TodoList;