import React from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import {ContainerStyled} from './components/styles/Container.styles';
import GlobalStyled from './components/styles/Global';
import { TTheme } from './theme/theme';


function App() {
  return (
    <ThemeProvider theme={TTheme}>
      <>
        <GlobalStyled />
        <Header title='HEADER TEXT GOES HERE'/>
        <ContainerStyled>
          <div>hello mrlnnnn!!!!!</div>
        </ContainerStyled>
      </>
    </ThemeProvider> 
  );
}

export default App;
