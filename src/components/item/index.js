import React from 'react';
import {
  Card,
  CardActionArea,
  CardMedia,
  makeStyles,
  Typography,


} from '@material-ui/core';
import { motion } from 'framer-motion';
const useStyles = makeStyles({
  container:{
    padding:'10px',
    
  },
  card: {
    padding: '10px',
    marginRight: '10px',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9e9e9e',
  },
  text: {
    fontWeight: 'bold',
  },
  imagem: {

    width: '125px',
    height: '200px',
    border: '1px solid black',
  },
  espaceSub: {
    marginTop: '10px',
  },
  action: {
    justifyContent: 'center',
    display: 'flex',
  },
  
})
const Item = (props) => {
  const classes = useStyles();
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }
  return (
        <motion.div
    variants={item}
         className={classes.container} >
          <Card className={classes.card} variant='outlined'>
            <CardActionArea className={classes.action} >
              <CardMedia className={classes.imagem}
                image={props.img}
                title={props.title}
              />
            </CardActionArea>
            <div className={classes.espaceSub}>
              <Typography
                className={classes.text}
                variant="subtitle1"
                align='left'>
                {props.subtitle1}
              </Typography>
              <Typography
                variant='subtitle2'
                align='left'
                color='textSecondary'>
                {props.subtitle2}
              </Typography>
            </div>
          </Card>
        </motion.div>
  )
}
export default Item;