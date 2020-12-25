import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component.jsx';

function App() {
  return (
    <Switch>
      <Route exact={true} path="/" component={HomePage}/>
    </Switch>
    
  );
}

export default App;
