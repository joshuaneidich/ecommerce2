import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.page.jsx';
import ShopPage from './pages/shop/shop.page.jsx';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/shop" component={ShopPage}/>
    </Switch>
    
  );
}

export default App;
