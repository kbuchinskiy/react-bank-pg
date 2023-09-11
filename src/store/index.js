import { combineReducers, createStore } from 'redux';
import bankReducer from './bankReducer';

const rootReducer = combineReducers({
  bankReducer
});

export const store = createStore(rootReducer);
