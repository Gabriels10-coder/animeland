import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Lista from '../paginaLista/';
import Login from '../login/'

function Rotas (){

    return(
        <BrowserRouter>
        <Switch>
            <Route exact path ='/' component ={Lista}/>
            <Route  path ='/Login' component ={Login}/>
        </Switch>
        </BrowserRouter>
    )
}

export default Rotas;