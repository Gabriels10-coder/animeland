import React from 'react';
import Menu from '../menu/';
const Estrutura =(props) =>{
    return(
        <div>
            <Menu/>
            {props.children}  
        </div>
    )
}
export default Estrutura;



