import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import {
    AppBar,
    Toolbar,
    InputBase,
    Button,
    Typography,
    makeStyles,
} from '@material-ui/core';
const useStyles = makeStyles({
menu:{
   flexGrow:1,
   flexDirection:'row',
   display:'flex',  
},
buttonGroup:{
    marginLeft:'20px',
    justifyContent:'center',
    
},
title:{
    display:'flex',
    alignItems:'center',
},
  containerIcon:{
    backgroundColor:'#424242' ,   
    borderRadius:'10px',
    padding:'0 15px',
    display:'flex',
    },
    input:{
        color:'#fff',
        marginTop:'5px',
    },
    icon:{
        marginTop:'6px',
        
    } ,  

})

const Menu = () => {
    const classes = useStyles();
    return (
        <div >
            <AppBar
                color='secondary'>
                <Toolbar>
                             <div className={classes.menu}>
                            <Typography
                            className={classes.title}
                                variant='h5'
                                color='primary'>
                                Anime Land
                                </Typography>
                                <div className={classes.buttonGroup}>
                                <Button >
                                    Inicio
                                </Button>
                                <Button >
                                    Gêneros
                                </Button>
                                <Button>
                                    Login
                                </Button>
                            </div>
                    </div>        
                        <div className={classes.containerIcon}>
                            <InputBase
                                className={classes.input}
                                placeholder='Procurar...' />
                            <SearchIcon
                                className={classes.icon} />
                                </div>
                        
                </Toolbar>

            </AppBar>
        </div>
    )
}

export default Menu;