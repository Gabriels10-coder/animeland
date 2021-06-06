
import { 
  createMuiTheme,
  ThemeProvider } from '@material-ui/core';
import React from 'react';
import {AnimateSharedLayout} from 'framer-motion';
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
        <AnimateSharedLayout>
      <Rotas/> 
      </AnimateSharedLayout>
       </ThemeProvider>
      
    </div>
  );
}

export default App;
