import React from 'react';
import './App.css';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import MainView from './components/MainView';
import Home from './components/Home';
import Work from './components/Work';

function App() {
  return (
    <BrowserRouter>
      <MainView>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
          <Route exact path={`${process.env.PUBLIC_URL}/home`}>
            <Redirect to={`${process.env.PUBLIC_URL}/`} />
          </Route>
          <Route path={`${process.env.PUBLIC_URL}/work`} component={Work} />
          {/* <Route path="/studies" component={Studies} />
        <Route path="/projects" component={Projects} />
        <Route path="/hobbies" component={Hobbies} />
        <Route component={ErrorPage} /> */}
        </Switch>
      </MainView>
    </BrowserRouter>
  );
}

export default App;
