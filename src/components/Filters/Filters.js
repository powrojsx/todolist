import React from 'react';
import styled from 'styled-components';

const StyledFilters = styled.div`
  width: 100%;
  padding: 1rem;
  display: grid;
  grid-template-columns: 5rem 1fr;
  grid-gap: 1rem;
`;

const FiltersGroup = styled.div``;

const Button = styled.button`
  padding: 0 1rem;
  border: none;
  background: transparent;
`;

export const Filters = ({ handleFilterChange }) => {
  return (
    <StyledFilters>
      <span>FILTERS:</span>
      <FiltersGroup>
        <Button onClick={() => handleFilterChange('SHOW_ALL')}>ALL</Button>
        <Button onClick={() => handleFilterChange('SHOW_TODO')}>TODO</Button>
        <Button onClick={() => handleFilterChange('SHOW_DONE')}>DONE</Button>
      </FiltersGroup>
    </StyledFilters>
  );
};
