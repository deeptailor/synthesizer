import {KEY_PRESSED} from '../actions/notes_actions.js';
import {KEY_RELEASED} from '../actions/notes_actions.js';
import {NOTE_NAMES} from '../util/tones.js';


let _defaultState = [];

const Notes = (state = _defaultState, action) =>{
  Object.freeze(state);

  let include =  (arr, key) => { return arr.includes(key);};

  switch(action.type){
    case KEY_PRESSED:
      if (!include(NOTE_NAMES, action.key)){
        return state;
      }
      if (include(state, action.key)) {
        return state;
      } else {
        return [...state, action.key];
      }

    case KEY_RELEASED:
      if (!include(NOTE_NAMES, action.key)){
        return state;
      }
      if (include(state, action.key)) {
        let index = state.indexOf(action.key);
        return state.slice(0, index).concat(state.slice(index+1, state.length));
      } else {
        return state;
      }

    default:
      return state;
  }

};

export default Notes;
