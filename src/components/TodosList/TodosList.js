import React from 'react';
import styled, { css } from 'styled-components';
import colors from '../../utils/colors';

const StyledTodosList = styled.ul`
  width: 100%;
  list-style-type: none;
  display: flex;
  flex-direction: column;
`;

const Todo = styled.li`
  width: 100%;
  padding: 1rem;
  border-left: 5px solid ${colors.red};
  cursor: pointer;

  ${(props) =>
    props.done &&
    css`
      border-left: 5px solid ${colors.green};
    `}
`;

export const TodosList = ({ todos, toggleTodo }) => {
  const renderTodos = todos.map((todo, index) => (
    <Todo done={todo.done} onClick={() => toggleTodo(index)}>
      {todo.text}
    </Todo>
  ));

  return <StyledTodosList>{renderTodos}</StyledTodosList>;
};
