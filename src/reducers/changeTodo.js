export default function changeTodo (action, state = { todos: [] }) {
  switch (action.type) {
    case 'ADD_TODO': return { todos: [...state.todos, action.todo]}
    case 'DELETE_TODO': return { todos: state.todos.filter( todo => todo !== action.todo)}
    default: return state
  }
}
