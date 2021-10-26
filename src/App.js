import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import AOS from 'aos';

AOS.init();

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Home />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
