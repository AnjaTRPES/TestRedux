import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import countReducer from '../reducers/countReducer';
import textReducer from '../reducers/textReducer';

const rootReducer = combineReducers(
{countReducer,
textReducer }
);


export const Store = createStore(rootReducer, applyMiddleware(thunk));