import React, { useState } from 'react';
import { Grid, Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import projects from '../shared/projects';
import ProjectCarousel from './ProjectCarousel';
import ProjectData from './ProjectData';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
  },
  carouselContainer: {
    flexGrow: 3,
  },
  dataContainer: {
    flexGrow: 1,
  }
}));

export default function Projects() {
  const classes = useStyles();
  const [index, setIndex] = useState(0);
  return (
    <Grid container className={classes.root}>
      <Grid container item className={classes.carouselContainer}>
        <ProjectCarousel />
      </Grid>
      <Grid container item className={classes.dataContainer}>
        <ProjectData />
      </Grid>
    </Grid>
  );
}
