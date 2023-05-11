import { combineReducers } from 'redux';
import { ActionTypes } from '../actionTypes/actionTypes';

// Initial state of the application
const initialState = {
  counter: 0,
  todos: [],
};

// Reducer for the counter
const counterReducer = (state = initialState.counter, action) => {
  switch (action.type) {
    case ActionTypes.INCREMENT_COUNTER:
      return state + 1;
    case ActionTypes.DECREMENT_COUNTER:
      return state - 1;
    default:
      return state;
  }
};

// Reducer for the todos
const todosReducer = (state = initialState.todos, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      return [...state, action.payload];
    case ActionTypes.REMOVE_TODO:
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
};

// Combine all reducers
const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer,
});

export default rootReducer;
