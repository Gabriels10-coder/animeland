import React from 'react';
import Item from '../item/';
import Menu from '../menu/';
import {Grid, makeStyles} from '@material-ui/core';
const useStyles = makeStyles( {
    grade:{
        justifyContent:'center',
      
    },
    space:{
        marginRight:'1px',  
    },
    fundo:{
        backgroundColor:'#424242',
        marginTop:'65px',
        height:'100%',
        
    },
    
});
function Lista(props) {
const classes = useStyles();
    const animeList = [
        {
            id: 1,
            img: '/img/hunter.jpg',
            title: 'Hunter x Hunter',
            subtitle1: 'Hunter x Hunter',
            subtitle2: '148 eps',
        },
        {
            id: 2,
            img: '/img/naruto.jpg',
            title:'Naruto Shippuden',
            subtitle1: 'Naruto Shippuden',
            subtitle2: '500 eps',

        },
        {
            id: 3,
            img: '/img/one.jpg',
            title: 'One Piece',
            subtitle1: 'One Piece',
            subtitle2: '1187 eps',

        },
    ]
    return (
        <div className={classes.fundo} >
            <Menu/>
            <Grid className={classes.grade} container   >
                <Grid className= {classes.space}  >
                    <Item  
                    img='/img/naruto.jpg'
                    subtitle1='Naruto Shippuden'
                    subtitle2='500 eps'
                    title='Naruto Shippuden'  />
                </Grid>
                <Grid className= {classes.space}  >
                    <Item 
                    img='/img/juju.jpg'
                    subtitle1='Jujutsu Kaisen'
                    subtitle2='50 eps'
                    title='Jujutsu Kaisen'  />
                </Grid>
                <Grid className= {classes.space}  >
                    <Item 
                    img='/img/hunter.jpg'
                    subtitle1='Hunter x Hunter'
                    subtitle2='148 eps'
                    title='Hunter x Hunter'  />
                </Grid>
                <Grid className= {classes.space}  >
                    <Item 
                    img='/img/one.jpg'
                    subtitle1='One Piece'
                    subtitle2='1187 eps'
                    title='One Piece'  />
                </Grid>
                <Grid className= {classes.space}  >
                    <Item 
                    img='/img/boku.jpg'
                    subtitle1='Boku no Hero'
                    subtitle2='80 eps'
                    title='My Hero Academia'  />
                </Grid>
                <Grid className= {classes.space}  >
                    <Item 
                    img='/img/boruto.jpg'
                    subtitle1='Boruto'
                    subtitle2='201 eps'
                    title='Boruto'  />
                </Grid>
                <Grid className= {classes.space}  >
                    <Item 
                    img='/img/slime.jpg'
                    subtitle1='Slime'
                    subtitle2='43 eps'
                    title='Slime'  />
                </Grid>
                <Grid className= {classes.space}  >
                    <Item 
                    img='/img/tokyo.jpg'
                    subtitle1='Tokyo Revengers'
                    subtitle2='13 eps'
                    title='Tokyo Revengers'  />
                </Grid>
                <Grid className= {classes.space}  >
                    <Item 
                    img='/img/fairy.jpg'
                    subtitle1='Fairy Tail'
                    subtitle2='300 eps'
                    title='Fairy Tail'  />
                </Grid>
                <Grid className= {classes.space}  >
                    <Item 
                    img='/img/punch.jpg'
                    subtitle1='One Punch Man'
                    subtitle2='25 eps'
                    title='One Punch Man'  />
                </Grid>
                <Grid className= {classes.space}  >
                    <Item 
                    img='/img/bleach.jpg'
                    subtitle1='Bleach'
                    subtitle2='366 eps'
                    title='Bleach'  />
                </Grid>
                <Grid className= {classes.space}  >
                    <Item 
                    img='/img/death.jpg'
                    subtitle1='Death Note'
                    subtitle2='74 eps'
                    title='Death Note'  />
                </Grid>
                <Grid className= {classes.space}  >
                    <Item 
                    img='/img/gin.jpg'
                    subtitle1='Gintama'
                    subtitle2='379 eps'
                    title='Gintama'  />
                </Grid>
                <Grid className= {classes.space}  >
                    <Item 
                    img='/img/full.jpg'
                    subtitle1='Full Metal '
                    subtitle2='64 eps'
                    title='Full Metal'  />
                </Grid>
                <Grid className= {classes.space}  >
                    <Item 
                    img='/img/mob.jpg'
                    subtitle1='Mob Psycho 100'
                    subtitle2='54 eps'
                    title='Mob Psycho 100'  />
                </Grid>
                <Grid className= {classes.space}  >
                    <Item 
                    img='/img/Gate.jpg'
                    subtitle1='Gate'
                    subtitle2='24 eps'
                    title='Gate'  />
                </Grid>
                <Grid className= {classes.space}  >
                    <Item 
                    img='/img/parasyte.jpg'
                    subtitle1='Parasyte'
                    subtitle2='24 eps'
                    title='Parasyte'  />
                </Grid>
                <Grid className= {classes.space}  >
                    <Item 
                    img='/img/over.jpg'
                    subtitle1='Overlord'
                    subtitle2='39 eps'
                    title='Overlord'  />
                </Grid>
                
            </Grid>

        </div>
    )


}




export default Lista;