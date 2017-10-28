import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import List from './../shared/List';

import * as actions from './../actions/users';

class Home extends Component {
  async componentDidMount() {
    if (this.props.users.length === 0) {
      await this.props.searchUsers('fripSide');
    }
  }

  renderUser = user => {
    return (
      <li key={user.id} className="User">
        <Link to={`/${user.id}/tracks`} className="User-username">
          {user.username} - {user.full_name || ''}
        </Link>
      </li>
    );
  };

  render() {
    return (
      <div className="Home">
        <h1>Users</h1>
        <List items={this.props.users}>{this.renderUser}</List>
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
