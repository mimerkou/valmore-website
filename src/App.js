import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Careers from './pages/Careers';
import NotFound from './pages/NotFound';
import AOS from 'aos';

AOS.init();

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/valmore-website" />
        </Route>
        <Route path="/valmore-website" component={Home} exact />
        <Route path="/careers" component={Careers} exact />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
