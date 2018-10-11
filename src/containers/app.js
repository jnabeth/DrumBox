import React, { Component } from 'react';
import { connect } from 'react-redux';
import { displayKey, playSound } from '../actions/index';
import Keyboard from './keyboard';
import Panel from '../components/panel';

class App extends Component {
  onKeyDown(event) {
    var key = event.key.toUpperCase();
    if (key == 'META') {
      key = "";
    }
    if(/^[QWEASDZXC]/.test(key)){
      document.getElementById(`${key}btn`).click();
      document.getElementById(`${key}btn`).style.backgroundColor = "#D9D9D9";
    }
  }

  onKeyUp(event) {
    var key = event.key.toUpperCase();
    if (key == 'META') {
      key = "";
    }
    if(/^[QWEASDZXC]/.test(key)){
      document.getElementById(`${key}btn`).style.backgroundColor = "#EAC67A";
    }
  }

  render() {
    return (
      <div id="page" tabIndex="0" onKeyDown={this.onKeyDown.bind(this)} onKeyUp={this.onKeyUp.bind(this)}>
          <h3 id="title">
            Drum Machine
          </h3>
          <div id="drum-machine">
            <Keyboard />
            <Panel />
          </div>
      </div>
    );
  }
}

export default connect(null, { displayKey, playSound })(App);
