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
      </MainView>
    </BrowserRouter>
  );
}

export default App;
