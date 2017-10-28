import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from './../actions/users';

class Home extends Component {
  async componentDidMount() {
    if (this.props.users.length === 0) {
      await this.props.searchUsers('fripSide');
    }
  }

  render() {
    return (
      <div className="Home">
        <h1>Home</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: Object.values(state.users.entities),
  };
}

export default connect(mapStateToProps, {
  searchUsers: actions.searchUsers,
})(Home);
