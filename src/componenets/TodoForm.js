import React, {useState, useEffect, useRef} from 'react'

function TodoForm(props) {

    const [input, setInput] = useState('')

    const inputRef = useRef(null)

    useEffect(() => {
      inputRef.current.focus()
      //automatically puts curson in form
    })

    const handleChange = (e) => {
      setInput(e.target.value)
    }

    const handleSubmit = (e) => {
      e.preventDefault()

      props.onSubmit({
        id: Math.floor(Math.random() * 1000000),
        text: input
      })

      setInput("")
    }

  return (
    <div>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a todo"
          value={input}
          className="todo-input"
          onChange={handleChange}
          ref={inputRef}
        />
        <button className="todo-button">Add todo</button>
      </form>
    </div>
  );
}

export default TodoForm