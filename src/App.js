
import { 
  createMuiTheme,
  ThemeProvider } from '@material-ui/core';
import React from 'react';
import Rotas from './components/rota/'


const theme = createMuiTheme({
  palette:{
    primary:{
      main:'#000',
    },
    secondary:{
      main:'#9e9e9e',
    },
   
    
  }, 

})

function App() {
  return (
    <div >
      <ThemeProvider theme = {theme}>
      <Rotas/>
       </ThemeProvider>
    </div>
  );
}

export default App;
