import {combineReducers} from 'redux';
import Notes from './notes_reducer';
import tracksReducer from './tracks_reducer';
import isRecording from './is_recording_reducer';

const rootReducer = combineReducers({notes: Notes, isRecording: isRecording, tracks: tracksReducer});

export default rootReducer;
