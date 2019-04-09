import React from 'react';
import { Helmet } from 'react-helmet';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
  }
`;

const StyledMain = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Helmet>
        <title>Todolist</title>
        <link
          href='https://fonts.googleapis.com/css?family=Roboto:300,400,500'
          rel='stylesheet'
        />
      </Helmet>
      <StyledMain>{children}</StyledMain>
    </>
  );
};
