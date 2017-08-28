import { combineReducers}  from 'redux';
import { wordsReducer } from './tnine_reducer.js';

const rootReducer = combineReducers({
    words : wordsReducer
});

export default rootReducer;