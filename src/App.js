import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Route, Link, Switch } from 'react-router-dom';

import './App.scss';

import routes from "./routes/";
import {
  userRequest,
} from './actions/userActions';

class App extends Component {
  constructor(props) {
    super(props);

    let user;

    this.state = {
      user,
    };
  }

  componentDidMount() {
      this.setState({
        user: this.props.userRequest(),
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.user !== this.props.user) {
      this.setState({
        user: this.props.user,
      });
    }
  }

  render() {
    console.log(this.state.user);
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

const mapStateToProps = (state) => {
  return {
      user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        userRequest: () => {
            dispatch(userRequest());
        },
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
