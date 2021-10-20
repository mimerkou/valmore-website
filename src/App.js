import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Navbar />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
