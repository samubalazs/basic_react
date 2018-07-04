import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Route, Link, Switch } from 'react-router-dom';
import styled from 'styled-components';

import './App.scss';

import routes from "./routes/";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: red;
`;

class App extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="container">
        <Button>hello</Button>
        <Title>
          Hello World, this is my first styled component!
        </Title>
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
