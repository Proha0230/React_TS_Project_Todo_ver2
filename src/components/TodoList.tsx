import { Todo } from "../types";
import TodoItem from "./TodoItem";

interface TodoListProps {
    list: Todo[]
}

const TodoList = ({list}:TodoListProps) =>{
    return(
        <ul>
            {list.map((todo)=>(
                <TodoItem key={todo.id}{...todo} />
            ))}
        </ul>
    )
}

export default TodoList;