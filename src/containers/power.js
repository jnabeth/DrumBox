import React, { Component } from 'react';
import { connect } from 'react-redux';
import { switchPower, displayKey } from '../actions/index';

class Power extends Component {

  onClick () {
    this.props.displayKey("");
    this.props.switchPower(this.props.powerState);
  }

  render() {
    return (
      <button
        id="powerButton"
        type="button"
        className="power"
        onClick={this.onClick.bind(this)}
        style={{backgroundColor: this.props.btnColor}}
        >
          {this.props.powerState}
        </button>
    );
  }
}

function mapStateToProps( state ) {
  return {
    powerState: state.panel.powerState,
    btnColor: state.panel.btnColor
  };
};

export default connect(mapStateToProps, { switchPower, displayKey })(Power);
