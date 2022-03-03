import React, {useState} from 'react'
import TodoForm from "./TodoForm"


function TodoList() {
    const [todos, setTodos] = useState([])

    const addTodo = () => {
        if(!todos.text || /^\s*$/.test(todo.text)){
            return
        }
        const newTodos = [todo, ...todos]

        setTodos(newTodos)
        console.log(...todos)
    }


  return (
    <div>
        <h2>What do we have to do today?</h2>
        <TodoForm/>
    </div>
  )
}

export default TodoList