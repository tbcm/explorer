import React, { Component } from 'react';
import './style.css';
import Block from './../Block';
import Home from './../Home';
import Transaction from './../Transaction';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
         
          <h2>Block Explorer</h2>
       
        <div className="navi">
          <Router>
            <div >
              <Link className="meni" to="/">Home</Link>
              <Route exact path="/" component={Home}/>
              <Route exact path="/block" render={() => (
                <h3>Please select a block Hash.</h3>
              )}/>
              <Route path="/block/:hash" component={Block}/>
              <Route exact path="/transaction" render={() => (
                <h3>Please select a transaction Hash.</h3>
              )}/>
              <Route path="/transaction/:hash" component={Transaction}/>
            </div>
        </Router>
        </div>
        </div>
      </div>
    );
  }
}
export default App;
