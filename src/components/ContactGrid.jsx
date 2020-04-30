import React from 'react';
import { GitHub, LinkedIn, Mail } from '@material-ui/icons';
import { Grid, Link } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
const useStyles = makeStyles(({ spacing }) => ({
  icon: {
    margin: spacing(1),
    color: 'white',
  },
  container: {
    marginTop: spacing(3),
  },
}));
const ContactGrid = props => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Grid className={classes.container} container justify="center">
      <Link href="https://github.com/Progressandro" target="_blank">
        <GitHub fontSize="large" className={classes.icon} />
      </Link>
      <Link href="https://linkedin.com/in/progressandro" target="_blank">
        <LinkedIn fontSize="large" className={classes.icon} />
      </Link>
      <Link href="mailto:progressandro@gmail.com">
        <Mail fontSize="large" className={classes.icon} />
      </Link>
    </Grid>
  );
};

export default ContactGrid;
