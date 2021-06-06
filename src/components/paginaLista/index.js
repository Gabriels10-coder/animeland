import React from 'react';
import Item from '../item';
import Estrutura from '../estrutura/'
import { makeStyles,Grid } from '@material-ui/core';
import animeList from '../../assets/arrays/animes'
import{ motion} from 'framer-motion';
const useStyles = makeStyles({
    fundo: {
        backgroundColor: '#424242',
        display:'flex',
        marginTop:  '65px',
        height:'100%',
       
       

    },
    grid:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    }
   
});
function Lista() {
    const container = {
        visible: {
          transition:{
              delayChildren:0.2,
              staggerChildren:0.2,
          },
          }
        
      }
    const classes = useStyles();

    return ( 
    <Estrutura>
        <motion.div 
        initial="hidden"
        animate='visible'
        variants={container}
         className={classes.fundo} >
               <Grid  className ={classes.grid} container >
                        {animeList.map(anime => (
                            <Item
                              
                                key={anime.id}
                                img={anime.img}
                                subtitle1={anime.subtitle1}
                                subtitle2={anime.subtitle2}
                                title={anime.title} />
                        )
                        )}
                        
                        </Grid>
                       
           
        </motion.div> </Estrutura>

    )


}




export default Lista;