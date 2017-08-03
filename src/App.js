import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/todoForm'
import TodoList from './components/todoList'

class App extends Component {
  render() {
    return (
      <div className="container">
        <h2>To Do List</h2>
        <TodoForm store={this.props.store}/><br/><br/>
        <TodoList store={this.props.store}/>
      </div>
    );
  }
}

export default App;
