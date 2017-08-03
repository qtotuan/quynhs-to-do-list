import React from 'react'

const TodoList = (props) => {

  function handleClick (event, todo) {
    event.preventDefault()
    props.store.dispatch({ type: 'DELETE_TODO', todo})
  }

  return (
    <ul>
      {props.store.getState().todos.map( todo => {
        return (
            <li>
              {todo}
              <button onClick={(e) => {
                handleClick(e, todo)}}>Done!
              </button>
            </li>
        )
      })}
    </ul>
  )
}

export default TodoList
