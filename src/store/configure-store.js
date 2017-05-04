import rootReducer from '../reducers';
import {createStore, app} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

export default (initialState) => {
	return createStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
};
