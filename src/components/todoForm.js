import React from 'react'

class TodoForm extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      todo: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.store.dispatch({ type: 'ADD_TODO', todo: this.state.todo })
  }

  handleChange = (e) => {
    this.setState({ todo: e.target.value })
    console.log(this.state.todo);
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' onChange={this.handleChange}/><br/><br/>
        <input type='submit'/>
      </form>
    )
  }
}

export default TodoForm
