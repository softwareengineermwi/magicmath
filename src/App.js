import React from 'react';

import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';

import './App.css';

import Home from './components/Home';
import Calculator from './components/Calculator';
import Quote from './components/Quote';

const App = () => (
  <Router>
    <main className="container">
      <header>
        <div className="grid items-center">
          <div className="col-6">
            <h1>Math Magicians</h1>
          </div>
          <nav className="col-6 flex justify-end">
            <ul>
              <li className="inline-block padding-x-xs border-right">
                <Link to="/">Home</Link>
              </li>
              <li className="inline-block padding-x-xs border-right">
                <Link to="/calculator">Calculator</Link>
              </li>
              <li className="inline-block padding-x-xs">
                <Link to="/quotes">Quote</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <Switch>
        <Route path="/quotes">
          <Quote />
        </Route>
        <Route path="/calculator">
          <Calculator />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </main>
  </Router>
);

export default App;
