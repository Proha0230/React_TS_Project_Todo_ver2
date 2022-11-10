import { useState, useEffect } from 'react';
import TodoItem from './components/TodoItem';
import NewTodoForm from './components/NewTodoForm';
import {Todo} from "./types";

function App() {

  const [text, setText]=useState('');
  const [todos,setTodos]=useState<Todo[]>([]);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) =>{
    setText(event.target.value)
  }

  const addTodo =()=>{

    const newTodo:Todo ={
      id: new Date().toString(),
      title: text,
      completed: false,
    }
    setTodos([newTodo,...todos]);
    setText('');
  }

  useEffect( ()=> {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then((data: Todo[])=>{
      setTodos(data);
    })
  }, []);

  return (
    <div className="App">
      <NewTodoForm value={text} onChange={handleInput} handleClick={addTodo} />
      <TodoItem style={{border:'1px solid white'}} id="112" title="First Todo" completed={false} />
    </div>
  );
}

export default App;
