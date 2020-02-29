import React from 'react';
import './App.css';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import SideDrawer from './components/SideDrawer';
import Home from './components/Home';
import Work from './components/Work';

function App() {
  return (
    <BrowserRouter>
      <SideDrawer>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home">
            <Redirect to="/" />
          </Route>
          <Route path="/work" component={Work} />
          {/* <Route path="/studies" component={Studies} />
        <Route path="/projects" component={Projects} />
        <Route path="/hobbies" component={Hobbies} />
        <Route component={ErrorPage} /> */}
        </Switch>
      </SideDrawer>
    </BrowserRouter>
  );
}

export default App;
