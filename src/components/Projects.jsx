import React from 'react';
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
  Chip,
  Button,
  Hidden,
} from '@material-ui/core';
import Carousel from 'nuka-carousel';
import projects from '../shared/projects';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    padding: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      minHeight: 'initial',
    },
  },
  card: {
    height: '100%',
    padding: theme.spacing(2),
    // paddingBottom: theme.spacing(6),
    // marginLeft: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      minHeight: 'initial',
    },
  },
  cardImage: {
    maxHeight: 500,
    maxWidth: 500,
  },
  cardContent: {
    width: '40%',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  cardDivider: {
    border: '1px solid',
    borderColor: theme.palette.primary.dark,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  cardMedia: {
    display: 'flex',
    justifyContent: 'center',
    minWidth: '60%',
    [theme.breakpoints.down('sm')]: {
      minWidth: '100%',
    },
  },
  buttons: {
    opacity: '0.5',
  },
  technologiesList: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      width: 'initial',
      padding: theme.spacing(0.5),
    },
  },
  description: {
    minWidth: '100%',
  },
  actions: {
    textDecoration: 'none',
    fontWeight: 'bold',
    marginTop: 10,
  },
}));
const Projects = () => {
  const classes = useStyles();
  const slides = projects.map(item => (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Typography variant="h4">{item.title}</Typography>
        <Divider className={classes.cardDivider} />
        <Grid container>
          <Grid item className={classes.description}>
            <Typography variant="body1">{item.description}</Typography>
          </Grid>
          <Grid item>
            <List className={classes.technologiesList}>
              {item.technologies.map(tech => (
                <ListItem>
                  <Chip color="secondary" label={tech} />
                </ListItem>
              ))}
            </List>
            <Divider className={classes.cardDivider} />
            <Button
              size="small"
              className={classes.actions}
              href={item.repository}
              variant="outlined"
              color="primary"
            >
              Visit Repository
            </Button>
          </Grid>
        </Grid>
      </CardContent>
      <CardMedia className={classes.cardMedia}>
        <img
          className={classes.cardImage}
          src={
            !item.image.includes('https://')
              ? `${process.env.PUBLIC_URL}/assets/${item.image}`
              : item.image
          }
          alt={item.title}
        />
      </CardMedia>
    </Card>
  ));

  return (
    <Grid container item className={classes.root}>
      <Carousel
        slidesToShow={1}
        slidesToScroll={1}
        renderBottomCenterControls={null}
        renderCenterLeftControls={null}
        renderCenterRightControls={({ nextSlide }) => (
          <Chip
            onClick={nextSlide}
            className={classes.buttons}
            color="primary"
            aria-label="add"
            label="►"
          />
        )}
        afterSlide={() => window.scrollTo(0, 0)}
        wrapAround
        heightMode="first"
      >
        {slides}
      </Carousel>
    </Grid>
  );
};

export default Projects;
