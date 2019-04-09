import React, { useState } from 'react';
import styled from 'styled-components';
import { Layout } from '../components/Layout/Layout';
import colors from '../utils/colors';
import { TodoInput } from '../components/TodoInput/TodoInput';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as todoActions from '../store/actions/todoActions';
import { Filters } from '../components/Filters/Filters';
import { TodosList } from '../components/TodosList/TodosList';
import { makeGetFilteredTodos } from '../store/selectors';

const TodoList = styled.div`
  width: 40%;
  box-shadow: 0px 0px 50px -20px rgba(0, 0, 0, 0.75);
  max-height: 40rem;
`;

const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr 4rem;
  padding: 1rem;
  border-bottom: 1px solid ${colors.lightGray};
  color: ${colors.red};
`;

const StyledTitle = styled.h1`
  font-size: 1em;
  margin: 0;
`;

const App = ({ todos, todoActions }) => {
  const [todoText, setTodoText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    todoActions.addTodo(todoText);
    setTodoText('');
  };

  return (
    <Layout>
      <TodoList>
        <Header>
          <StyledTitle>Todolist</StyledTitle>
        </Header>
        <TodoInput
          value={todoText}
          handleSubmit={handleSubmit}
          handleChange={setTodoText}
        />
        <Filters handleFilterChange={todoActions.setFilter} />
        <TodosList todos={todos} toggleTodo={todoActions.toggleTodo} />
      </TodoList>
    </Layout>
  );
};

const mapStateToProps = (state) => {
  const getVisibleTodos = makeGetFilteredTodos();

  return {
    todos: getVisibleTodos(state.todoReducer)
  };
};

const mapDispatchToProps = (dispatch) => ({
  todoActions: bindActionCreators(todoActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
