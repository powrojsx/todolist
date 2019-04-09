import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from '../../utils/colors';

const InputContainer = styled.form`
  width: 100%;
  border-bottom: 1px solid ${colors.lightGray};
  display: grid;
  grid-template-columns: 1fr 3rem;
  box-shadow: 0px 0px 20px -10px rgba(0, 0, 0, 0.75);
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 500;
  border: none;
  color: ${colors.gray};
`;

const Button = styled.button`
  width: 100%;
  height: 100%;
  background: ${colors.blue};
  color: ${colors.white};
  font-size: 2rem;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TodoInput = ({ value, handleSubmit, handleChange }) => {
  return (
    <InputContainer onSubmit={handleSubmit}>
      <Input
        value={value}
        placeholder='Input todo...'
        onChange={(event) => handleChange(event.target.value)}
      />
      <Button>+</Button>
    </InputContainer>
  );
};

TodoInput.propTypes = {
  value: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
};
