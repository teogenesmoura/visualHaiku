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
  const [haikai, setHaikai] = useState(0)
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
      setHaikai(chooseHaikai())
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const chooseHaikai = () => {
    const max = haikaiData.length - 1;
    const min = 0
    let selected = Math.floor(Math.random() * (max - min)) + min;
    return selected
  };

  return (
    <>
      <Fade in timeout={3000}>
        <div className={classes.body}>
          <Grid container className={classes.container}>
            <Haikai data={haikaiData[haikai]} />
          </Grid>
        </div>
      </Fade>
    </>
  )
}
