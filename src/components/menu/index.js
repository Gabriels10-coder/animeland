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
import { motion } from 'framer-motion';
const useStyles = makeStyles({
    menu: {
        flexGrow: 1,
        flexDirection: 'row',
        display: 'flex',
    },
    buttonGroup: {
        marginLeft: '20px',
        justifyContent: 'center',

    },
    title: {
        display: 'flex',
        alignItems: 'center',
    },
    containerIcon: {
        backgroundColor: '#424242',
        borderRadius: '10px',
        padding: '0 15px',
        display: 'flex',
    },
    input: {
        color: '#fff',
        marginTop: '5px',
    },
    icon: {
        marginTop: '6px',

    },

})

const Menu = () => {
    const classes = useStyles();

    const input = {
        initial: {
            widht:50,
            transition:{
                duration:1,
            },
                
            },
        anima: {
          widht:100,
          
        }
      }
    return (
        <div >
            <AppBar color='secondary'>
                <Toolbar>
                    <div className={classes.menu}>
                        <Typography
                            className={classes.title}
                            variant='h5'
                            color='primary'>
                            Anime Land
                                </Typography>
                        <div
                            
                            className={classes.buttonGroup}>
                            <Button 
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            component={motion.div}
                            href='' >
                                Inicio
                            </Button>
                            <Button  
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            component={motion.div} >
                                Gêneros
                                </Button>
                            <Button 
                            href='/login'
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            component={motion.div} 
                            >
                                Login
                                </Button>
                        </div>
                    </div>
                    <motion.div 
                    variants={input}
                    initial='initial'
                    animate='animal'
                    
                  
                     
                    className={classes.containerIcon}>
                        <InputBase 
                            className={classes.input}
                            placeholder='Procurar...'/>
                        <SearchIcon
                            className={classes.icon} />
                    </motion.div>

                </Toolbar>

            </AppBar>
        </div>
    )
}

export default Menu;