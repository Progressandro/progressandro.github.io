import React, { useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
// import projects from '../shared/projects';
import Slideshow from './Slideshow';

export default function Projects() {
  const [index, setIndex] = useState(0);
  const images = [
    'https://via.placeholder.com/800x600',
    'https://via.placeholder.com/800x600',
    'https://via.placeholder.com/800x600',
  ];

  const updateSlider = (oldIndex, newIndex) => {
    setIndex(newIndex);
    console.log(index, newIndex);
  };

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      item
      // style={{ width: '100%' }}
    >
      <Grid item>
        <Slideshow update={updateSlider} images={images} />
      </Grid>
      <Grid item>
        <Typography variant="h1">Test</Typography>
        {/* <Typography variant="h3">{projects[index].title}</Typography>
        <Typography variant="h4">{projects[index].technologies}</Typography>
        <Typography variant="body2">{projects[index].duration}</Typography>
        <Typography variant="body1">{projects[index].description}</Typography> */}
      </Grid>
    </Grid>
  );
}
