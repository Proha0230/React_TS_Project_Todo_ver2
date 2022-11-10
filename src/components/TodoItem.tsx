import React from "react";
import {Todo} from "../types"

interface TodoItemProps extends Todo {
    // id: string,
    // title: string,          Это все будет наследоваться от нашего модуля с типами Todo.ts
    // completed: boolean,
    style?: React.CSSProperties,
}

const TodoItem = ({id, title, completed, style={}}:TodoItemProps) =>{
    return(
        <li style={{color: 'red', backgroundColor: 'white', ...style}}>
            <input type="checkbox" checked ={completed} />
            <span>{title}</span>
            <span>&times;</span>
        </li>
    );
}

export default TodoItem;