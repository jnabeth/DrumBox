import { combineReducers } from 'redux';
import KeyboardReducer from './reducer_keyboard';
import PanelReducer from './reducer_panel';

const rootReducer = combineReducers({
  keyboard: KeyboardReducer,
  panel: PanelReducer
});

export default rootReducer;
