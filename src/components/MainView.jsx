import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Home from '@material-ui/icons/Home';
import Work from '@material-ui/icons/Work';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import { Avatar, Container } from '@material-ui/core';
import DrawerHeader from './DrawerHeader';

const drawerWidth = 300;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexGrow: 1,
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#283044',
    color: 'white',
  },
  navLink: {
    textDecoration: 'none',
    color: 'white',
  },
  activeNavLink: {
    '& > *, > *:hover': {
      backgroundColor: theme.palette.primary.light,
    },
  },
  content: {
    flexGrow: 1,
  },
  contentContainer: {
    flexGrow: 1,
    minHeight: '100vh',
    backgroundColor: '#EBF5EE',
    padding: 0,
  },
}));

function MainView(props) {
  const { container, children } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerContent = (
    <div>
      <DrawerHeader />
      <Divider />
      <List>
        <NavLink
          onClick={() => setMobileOpen(false)}
          className={classes.navLink}
          to="/"
          activeClassName={classes.activeNavLink}
          exact
        >
          <ListItem button key="Home">
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </NavLink>
        <NavLink
          onClick={() => setMobileOpen(false)}
          className={classes.navLink}
          to="/work"
          activeClassName={classes.activeNavLink}
          exact
        >
          <ListItem button key="Work">
            <ListItemIcon>
              <Work />
            </ListItemIcon>
            <ListItemText primary="Work" />
          </ListItem>
        </NavLink>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Hidden lgUp implementation="css">
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Alejandro Fabrega
            </Typography>
            <Avatar
              style={{ right: theme.spacing(2), position: 'absolute' }}
              className={classes.avatar}
              alt="Alejandro Fabrega"
              src="https://material-ui.com/static/images/avatar/1.jpg"
            />
          </Toolbar>
        </AppBar>
      </Hidden>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden lgUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawerContent}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawerContent}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <Hidden lgUp>
          <div className={classes.toolbar} />
        </Hidden>
        <Container maxWidth="xl" className={classes.contentContainer}>
          {children}
        </Container>
      </main>
    </div>
  );
}

export default MainView;
