import { createSelector } from 'reselect';

export const makeGetFilteredTodos = () => {
  return createSelector(
    (state) => state.filter,
    (state) => state.todos,
    (visibilityFilter, todos) => {
      console.log(visibilityFilter);
      switch (visibilityFilter) {
        case 'SHOW_TODO':
          return todos.filter((todo) => !todo.done);
        case 'SHOW_DONE':
          return todos.filter((todo) => todo.done);
        default:
          return todos;
      }
    }
  );
};
