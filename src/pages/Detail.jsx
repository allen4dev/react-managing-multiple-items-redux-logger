import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from './../actions/users';

import List from './../shared/List';

class Detail extends Component {
  async componentDidMount() {
    const { match, tracks, fetchUserTracks } = this.props;

    if (tracks.length === 0) {
      await fetchUserTracks(match.params.userId);
    }
  }

  renderTrack = track => {
    return (
      <li key={track.id} className="Track">
        <h4>{track.title}</h4>
      </li>
    );
  };

  render() {
    return (
      <div className="Detail">
        <h1>Tracks</h1>
        <List items={this.props.tracks}>{this.renderTrack}</List>
      </div>
    );
  }
}

function mapStateToProps(state, { match }) {
  const ids = state.users.tracks[match.params.userId] || [];

  return {
    tracks: ids.map(id => state.tracks.entities[id]),
  };
}

export default connect(mapStateToProps, {
  fetchUserTracks: actions.fetchUserTracks,
})(Detail);
