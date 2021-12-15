import React, { useContext } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { ThemeContext } from '../providers/ThemeContext';

const GlobalStyle = createGlobalStyle`
  //import font in index.html
  *, *::before, *::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.textOnBackground};
    font-family: 'Poppins';
    overflow-x: hidden;
    scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }
  ::-webkit-scrollbar {
    width: 10px;
    cursor: default;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey; 
    border-radius: 10px;
  }
    ::-webkit-scrollbar-thumb {
    background: #3700B3; 
    border-radius: 10px;
  }
`;

const Layout = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default Layout;
