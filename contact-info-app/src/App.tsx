import React from 'react';
import { ThemeProvider } from 'styled-components';
import Card from './components/Card/CardView';
import Header from './components/Header/Header';
import GlobalStyled from './components/styles/Global';
import data from './data/data';
import { TTheme } from './theme/theme';


function App() {
  return (
    <ThemeProvider theme={TTheme}>
      <>
        <GlobalStyled />
        <Header />
        <div>
          {data?.map((item, index)=>{
            return <Card key={index} item={item} />
            
          })}
        </div>
        
      </>
    </ThemeProvider> 
  );
}

export default App;
