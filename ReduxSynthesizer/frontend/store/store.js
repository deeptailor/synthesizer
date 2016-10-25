import {createStore} from 'redux';
import rootReducer from '../reducers/root_reducer';

let preLoadedState = {
  isRecording: false,
  tracks: {}
};

const configureStore = () =>(createStore(rootReducer, preLoadedState));

export default configureStore;
