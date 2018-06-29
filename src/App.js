import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Route, Link, Switch } from 'react-router-dom';

import routes from "./routes/";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {    
    return (
      <div className="container">
        <Button>hello</Button>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/will-match">Will Match</Link>
            </li>
            <li>
              <Link to="/will-not-match">Will Not Match</Link>
            </li>
          </ul>
          <Switch>
            { routes.map( route => <Route key={ route.path } { ...route } /> ) }
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
