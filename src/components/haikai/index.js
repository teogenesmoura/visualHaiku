import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import Photo1 from './../../assets/1.jpg';

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
    flexDirection: 'column',
    justifyContent: 'center',
    height: '25vh',
    width: '100%',
    margin: '0 0 2rem 0',
  },
  typography: {
    color: 'white',
    fontSize: 'x-large',
    fontFamily: 'Open Sans',
    alignSelf: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: '2',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
}));

export default function Haikai(props){
  const classes = useStyles();
  const [data, setData] = useState({...props.data});
  const [images, setImages] = useState('');
  const [selectedNumbers, setSelectedNumbers] = useState([]);

  useEffect(() => {
    setData(props.data);
    setImages(importAll(require.context('./../../assets/', false, /\.(png|jpe?g|svg)$/)))
  }, [props.data])

  function importAll(r) {
    let t_images = {};
    r.keys().map((item, index) => { t_images[item.replace('./', '')] = r(item); });
    return t_images;
  }

  function randomNumber() {
    let min = Math.ceil(1);
    let max = Math.floor(Object.keys(images).length);
    let selected = Math.floor(Math.random() * (max - min)) + min;
    return selected;
  }

  function selectRandomImage() {
    return randomNumber() + '.jpg';
  }

	return (
    <Grid container className={classes.body}>
      <Grid item
            className={classes.sentenceContainer}
            style={{
                    backgroundImage: `url(${images[selectRandomImage()]})`,
                    backgroundSize: '100%'}}>
                    <div className={classes.overlay}>
                      <Typography className={classes.typography}>{data.first_sentence} </Typography>
                    </div>
      </Grid>
      <Grid item
            className={classes.sentenceContainer}
            style={{backgroundImage: `url(${images[selectRandomImage()]})`,
                    backgroundSize: '100%'}}>
            <div className={classes.overlay}>
              <Typography className={classes.typography}>{data.second_sentence} </Typography>
            </div>
      </Grid>
      <Grid item
            className={classes.sentenceContainer}
            style={{backgroundImage: `url(${images[selectRandomImage()]})`,
                    backgroundSize: '100%'}}>
                    <div className={classes.overlay}>
                      <Typography className={classes.typography}>{data.third_sentence} </Typography>
                    </div>
      </Grid>
    </Grid>
	)
}
