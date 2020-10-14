import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  body: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
  },
  sentenceContainer: {
    display: 'flex',
    backgroundColor: 'purple',
    height: '30%',
    width: '100%',
    margin: '0 0 2rem 0',
  },
  typography: {
    alignSelf: 'center',
  }
}));

export default function Haikai(props){
  const classes = useStyles();
  const [data, setData] = useState({...props.data});

  useEffect(() => {
    setData(props.data)
  }, [props.data])

	return (
    <Grid container className={classes.body}>
      <Grid item className={classes.sentenceContainer}>
        <Typography className={classes.typography}>{data.first_sentence} </Typography>
      </Grid>
      <Grid item className={classes.sentenceContainer}>
        <Typography className={classes.typography}>{data.second_sentence} </Typography>
      </Grid>
      <Grid item className={classes.sentenceContainer}>
        <Typography className={classes.typography}>{data.third_sentence} </Typography>
      </Grid>
    </Grid>
	)
}
