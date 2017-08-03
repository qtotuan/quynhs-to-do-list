import render from './index'

export default function createStore (reducer) {
    let state;

    function dispatch (action) {
      state = reducer(action, state)
      console.log("state is", state);
      console.log('action is', action);
      render()
    }

    function getState () {
      return state
    }

    return {dispatch, getState}
}
