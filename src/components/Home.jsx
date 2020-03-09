import React from 'react';
import {
  Typography,
  List,
  ListItem,
  Card,
  CardContent,
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import introData from '../shared/home';

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  list: {
    padding: 0,
  },
  card: {
    borderRadius: spacing(2),
    transition: '0.3s',
    boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
    position: 'relative',
    background: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [breakpoints.up('md')]: {
      // minWidth: '30%',
      maxWidth: '50%',
      flexDirection: 'row',
    },
    maxWidth: '70%',
  },
  cardText: {
    whiteSpace: 'pre-line',
    paddingBottom: 0,
  },
  cardContent: {
    '&:last-child': {
      paddingBottom: spacing(2),
    },
  },
}));

const Highlights = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const set = introData.map((item, idx) => {
    const sideToSide = idx % 2 !== 0 ? 'flex-start' : 'flex-end';
    const background = idx % 2 !== 0 ? 'white' : '#283044';
    const color = idx % 2 !== 0 ? 'black' : 'white';
    return (
      <ListItem
        key={item.key}
        style={{
          justifyContent: sideToSide,
        }}
      >
        <Card
          className={classes.card}
          style={{ backgroundColor: background, color }}
        >
          {idx % 2 !== 0 ? (
            <>
              <CardContent className={classes.cardContent}>
                <Typography variant="body1" className={classes.cardText}>
                  {item.text}
                </Typography>
              </CardContent>
            </>
          ) : (
            <>
              <CardContent className={classes.cardContent}>
                <Typography variant="body1" className={classes.cardText}>
                  {item.text}
                </Typography>
              </CardContent>
            </>
          )}
        </Card>
      </ListItem>
    );
  });

  return <List className={classes.list}>{set}</List>;
};

function Home() {
  // const theme = useTheme();
  // const classes = useStyles(theme);
  return <Highlights />;
}

export default Home;
