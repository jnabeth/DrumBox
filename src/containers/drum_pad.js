import React, { Component } from 'react';
import { connect } from 'react-redux';
import { displayKey, playSound } from '../actions/index';

class DrumPad extends Component {

  onClick() {
    if(this.props.power == "on"){
      this.props.playSound(this.props.id);
      this.props.displayKey(this.props.name);
    }
  }

  render() {
    const btnId = `${this.props.id}btn`;
    return (
      <button
        id={btnId}
        type="button"
        className="drum-pad"
        onClick={this.onClick.bind(this)}
        >
          {this.props.id}
          <audio className="clip" id={this.props.id} src={this.props.sound}></audio>
        </button>
    );
  }
}

function mapStateToProps (state) {
  return {power: state.panel.powerState};
}

export default connect(mapStateToProps, { displayKey, playSound })(DrumPad);
