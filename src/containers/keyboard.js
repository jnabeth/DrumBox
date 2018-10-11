import React , { Component } from 'react';
import DrumPad from './drum_pad';

class Keyboard extends Component {
  render(){
    return (
      <div className="keyboard">
        <div>
          <DrumPad id="Q" sound="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" name="Heater 1"/>
          <DrumPad id="W" sound="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" name="Heater 2"/>
          <DrumPad id="E" sound="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" name="Heater 3"/>
        </div>
        <div>
          <DrumPad id="A" sound="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" name="Heater 4"/>
          <DrumPad id="S" sound="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" name="Clap"/>
          <DrumPad id="D" sound="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" name="Open HH"/>
        </div>
        <div>
          <DrumPad id="Z" sound="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" name="Kick n' Hat"/>
          <DrumPad id="X" sound="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" name="Kick"/>
          <DrumPad id="C" sound="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" name="Closed HH"/>
        </div>
      </div>
    );
  }
}

export default Keyboard;
