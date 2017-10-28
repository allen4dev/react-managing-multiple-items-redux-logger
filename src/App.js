import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { Route } from 'react-router-dom';

import Home from './pages/Home';
import Detail from './pages/Detail';

import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route path="/:userId/tracks" component={Detail} />
        </div>
      </Provider>
    );
  }
}

export default App;
