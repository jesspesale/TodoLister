import React, {useState} from 'react'
import TodoForm from "./TodoForm"
import Todo from './Todo'


function TodoList() {
    const [todos, setTodos] = useState([])

    const addTodo = (todo) => {
        if(!todo.text || /^\s*$/.test(todo.text)){
            return
        }
        const newTodos = [todo, ...todos]

        setTodos(newTodos)
    }


  return (
    <div>
        <h2>What do we have to do today?</h2>
        <TodoForm onSubmit={addTodo}/>
        <Todo todos={todos} completeTodo={completeTodo}/>
    </div>
  )
}

export default TodoList