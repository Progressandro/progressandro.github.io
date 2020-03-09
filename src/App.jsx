import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import MainView from './components/MainView';
import Home from './components/Home';
import Work from './components/Work';
import Projects from './components/Projects';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <MainView>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/work" component={Work} />
          <Route path="/projects" component={Projects} />
          {/* <Route path="/studies" component={Studies} />
        <Route path="/hobbies" component={Hobbies} />
        <Route component={ErrorPage} /> */}
        </Switch>
      </MainView>
    </BrowserRouter>
  );
}

export default App;
