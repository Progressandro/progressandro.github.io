import React from 'react';
import { Typography, Avatar, Grid, Hidden } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
    },
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  avatar: {
    alignSelf: 'center',
  },
  name: {
    fontSize: 20,
  },
}));
function DrawerHeader() {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <Hidden mdDown>
      <Grid container className={classes.root}>
        <Grid item xs={3}>
          <Avatar
            className={classes.avatar}
            alt="Alejandro Fabrega"
            src="https://material-ui.com/static/images/avatar/1.jpg"
          />
        </Grid>
        <Grid item container alignItems="center" xs={9}>
          <Typography component="h2" className={classes.name}>
            Alejandro Fabrega
          </Typography>
        </Grid>
      </Grid>
    </Hidden>
  );
}

export default DrawerHeader;
