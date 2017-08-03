import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import createStore from './createStore'
import changeTodo from './reducers/changeTodo'

const store = createStore(changeTodo)

export default function render () {
  ReactDOM.render(<App store={store}/>, document.getElementById('root'));
  registerServiceWorker();
}

store.dispatch({ type: "@@INIT" })

render()
