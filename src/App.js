import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import ProductDetails from './components/ProductDetails';
import Default from './components/Default';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/product-details" component={ProductDetails} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
