import React, { Component } from 'react';
import { connect } from 'react-redux';

class Display extends Component {
  render() {
    return (
      <div id="display">
        <div>{this.props.id}</div>
      </div>
    )
  }
}

function mapStateToProps( state ) {
  return {
    id: state.keyboard.displayMsg
  };
};

export default connect(mapStateToProps)(Display);
