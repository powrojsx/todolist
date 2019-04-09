import * as types from '../actions/todoTypes';

const INITIAL_STATE = {
  filter: 'SHOW_ALL',
  todos: []
};

export const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            text: action.payload,
            done: false,
            date: new Date()
          }
        ]
      };

    case types.SET_FILTER:
      return {
        ...state,
        filter: action.payload
      };

    case types.TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo, index) => {
          if (index === action.payload) {
            return {
              ...todo,
              done: !todo.done
            };
          }

          return todo;
        })
      };

    default: {
      return state;
    }
  }
};
