import React, {useState} from 'react'
import TodoForm from "./TodoForm"


function TodoList() {
    const [todos, setTodos] = useState([])

  return (
    <div>
        <h2>What do we have to do today?</h2>
        <TodoForm/>
    </div>
  )
}

export default TodoList