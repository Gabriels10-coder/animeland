import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Lista from '../lista/';



function Rotas (){

    return(
        <BrowserRouter>
        <Switch>
            <Route exact path ='/' component ={Lista}/>
        </Switch>
        </BrowserRouter>
    )
}

export default Rotas;