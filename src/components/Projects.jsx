import React, { useState } from 'react';
import {
  Grid,
  Typography,
  makeStyles,
  Card,
  CardMedia,
  CardContent,
  Divider,
  List,
  ListItem,
} from '@material-ui/core';
import Carousel from 'nuka-carousel';
import projects from '../shared/projects';

const useStyles = makeStyles(theme => ({
  root: {
    // width: '100%',
    height: '100%',
  },
  card: {
    padding: theme.spacing(2),
    paddingBottom: theme.spacing(6),
    marginLeft: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // height: '100%',
  },
  cardMedia: {
    maxHeight: 500,
    maxWidth: 500,
  },
}));
const Projects = () => {
  const classes = useStyles();
  const [projectIndex, setIndex] = useState(0);
  const slides = projects.map(item => (
    <Card className={classes.card}>
      <Typography variant="h4">{item.title}</Typography>
      <CardMedia>
        <img
          className={classes.cardMedia}
          src={`${process.env.PUBLIC_URL}/assets/${item.image}`}
          alt=""
        />
      </CardMedia>
      <CardContent className={classes.cardContent}>
        <Grid container>
          <Grid item>
            <Typography variant="h5">Technologies learned:</Typography>
            <List>
              {item.technologies.map(tech => (
                <ListItem>{tech}</ListItem>
              ))}
            </List>
          </Grid>
          <Grid item>
            <Typography variant="h5">Description</Typography>
            <Typography variant="body1">{item.description}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  ));

  return (
    <Grid container item className={classes.root}>
      <Carousel
        slidesToShow={1}
        slidesToScroll={1}
        renderBottomCenterControls={null}
        animation="zoom"
      >
        {slides}
      </Carousel>
    </Grid>
  );
};

export default Projects;
