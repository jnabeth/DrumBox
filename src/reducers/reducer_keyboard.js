import { DISPLAY_KEY } from '../actions/index';

export default function(state = '', action) {
  switch (action.type) {
    case DISPLAY_KEY:
      return {
        displayMsg: action.payload,
      };
    default:
      return state;
  }
}
