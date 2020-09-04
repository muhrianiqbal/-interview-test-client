import React from 'react';
// import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './views/Home';
import Add from './views/Add';
import Update from './views/Update';

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/add" exact>
            <Add />
          </Route>
          <Route path="/update" exact>
            <Update />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
