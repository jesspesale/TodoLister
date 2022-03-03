import React, {useState} from 'react'


function TodoForm() {

    const [input, setInput] = useState('')

    handleSubmit = (e) => {
      e.preventDefault()
    }

  return (
    <div>
        <form className="todo-form" onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Add a todo"
              value={input}
              className="todo-input"
            />
            <button className='todo-button'>Add todo</button>
        </form>
    </div>
  )
}

export default TodoForm