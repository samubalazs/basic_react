import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  userRequest,
} from '../../actions/userActions';

class userPage extends Component {
  constructor(props) {
    super(props);

    let user;
    let loading;

    this.state = {
      user,
      loading: true,
    };
  }

  componentDidMount() {
      this.setState({
        user: this.props.userRequest(),
      });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps);
    if (prevProps.user !== this.props.user) {
      this.setState({
        loading: false,
      });
    }
  }

  render() {    
    // const username = this.props.user[0].first_name;
    return (
      <div>{this.state.loading ? 'loading' : 'x'}</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(userPage);
