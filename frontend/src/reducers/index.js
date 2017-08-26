import { combineReducers}  from 'redux';
import { wordsReducer } from './words.js';

const rootReducer = combineReducers({
    words = wordsReducer
});

export default rootReducer;