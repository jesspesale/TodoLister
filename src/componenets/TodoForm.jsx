import React, {useState} from 'react'


function TodoForm() {

    const [input, setInput] = useState('')

  return (
    <div>
        <form className="todo-form">
            <input
              type="text"
              placeholder="Add a todo"
              value={input}
              className="todo-input"
            />

    </div>
  )
}

export default TodoForm