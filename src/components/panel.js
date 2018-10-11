import React, { Component } from 'react';
import Display from '../containers/display';
import Power from '../containers/power';

class Panel extends Component {
  render() {
    return (
      <div id="panel">
        <div id="topPanel">
          <Power />
        </div>
        <div id="bottomPanel">
          <Display />
        </div>
      </div>
    )
  }
}

export default Panel;
