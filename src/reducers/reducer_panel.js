import { SWITCH_POWER } from '../actions/index';


const INITIAL_STATE = {
  powerState: 'on',
  btnColor: '#439863'
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SWITCH_POWER:
      if (action.payload == 'on') {
        return {
          powerState: action.payload,
          btnColor: '#439863'
        };
      } else {
        return {
          powerState: action.payload,
          btnColor: '#986143'
        };
      }
    default:
      return INITIAL_STATE;
  }
}
