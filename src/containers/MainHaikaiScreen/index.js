import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Fade, Grid } from '@material-ui/core';
import haikaiData from './haikaiData';
import Haikai from './../../components/haikai';
const useStyles = makeStyles({
  body: {
    height: '100vh',
    display: 'flex'
  },
  container: {
    margin: '2% 10%',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'red',
    height: '100%',
  },
});

export default function MainHaikaiScreen() {
  const classes = useStyles();

  const chooseHaikai = () => {
    console.log('test')
  };

  useEffect(() => {
    chooseHaikai()
  })

  return (
    <>
      <Fade in timeout={3000}>
        <div className={classes.body}>
          <Grid container className={classes.container}>
            {haikaiData.map(haikaiData => <Haikai data={haikaiData} />)}
          </Grid>
        </div>
      </Fade>
    </>
  )
}
