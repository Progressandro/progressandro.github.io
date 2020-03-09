import React from 'react';
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  List,
  ListItem,
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import workList from '../shared/work';

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  root: {
    padding: spacing(2),
    flexGrow: 1,
  },
  card: {
    padding: spacing(2),
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'row',
    marginBottom: spacing(3),
    [breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
  cardMedia: {
    minWidth: 200,
    minHeight: 200,
    maxHeight: 200,
    [breakpoints.down('md')]: {
      width: '100%',
    },
  },
  cardContent: {
    flexGrow: 9,
    display: 'flex',
    flexDirection: 'row',
    [breakpoints.down('md')]: {
      flexDirection: 'column',
      flexGrow: 1,
    },
  },
  contentPosition: {
    flexBasis: '20%',
    flexGrow: 1,
  },
  contentDescription: {
    flexGrow: 11,
    flexBasis: '80%',
    borderLeft: '1px solid lightgrey',
    paddingLeft: spacing(3),
    marginLeft: spacing(1),
    [breakpoints.down('md')]: {
      flexGrow: 1,
      borderLeft: 'none',
      paddingLeft: 0,
      marginLeft: 0,
      marginTop: spacing(1),
      paddingTop: spacing(3),
      borderTop: '1px solid lightgrey',
    },
  },
}));
const Experiences = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const items = workList.map(item => (
    <ListItem className={classes.root} key={item.key}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={`${process.env.PUBLIC_URL}/assets/${item.image}`}
        />
        <CardContent className={classes.cardContent}>
          <div className={classes.contentPosition}>
            <Typography variant="h4">{item.company}</Typography>
            <Typography variant="h6" component="span">
              {item.role}
            </Typography>
            <Typography variant="body2">{item.timeframe}</Typography>
          </div>
          <div className={classes.contentDescription}>
            <Typography variant="h6">{item.description}</Typography>
          </div>
        </CardContent>
      </Card>
    </ListItem>
  ));

  return <List>{items}</List>;
};

function Work() {
  return <Experiences />;
}

export default Work;
