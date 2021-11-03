import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Careers from './pages/Careers';
import AOS from 'aos';

AOS.init();

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/careers" component={Careers} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
