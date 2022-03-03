import React from 'react'
import TodoForm from './TodoForm'

function Todo() {

    const [edit, setEdit] = useState({id: null, value: ''})

  return (
    <div>
        {todos.map(todo => (
            <div 
                className={todo.isComplete ? 'todo-row complete' : 'todo-row'} 
                key={index}
            >
                <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                    {todo.text}
                </div>
            </div>
        ))}
    </div>
  )
}

export default Todo