import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.page.jsx';
import ShopPage from './pages/shop/shop.page.jsx';
import Header from './components/header/header.component.jsx';

function App() {
  return (
    <div>
          <Header />
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/shop" component={ShopPage}/>
    </Switch>
    </div>
    
  );
}

export default App;
