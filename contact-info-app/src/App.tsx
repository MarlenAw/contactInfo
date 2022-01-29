import React from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header/Header';
import GlobalStyled from './components/styles/Global';
import { TTheme } from './theme/theme';


function App() {
  return (
    <ThemeProvider theme={TTheme}>
      <>
        <GlobalStyled />
        <Header />
      </>
    </ThemeProvider> 
  );
}

export default App;
