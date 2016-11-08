import { createStore, combineReducers,applyMiddleware } from 'redux';
import addCommit from './components/reducer';
import thunk from 'redux-thunk';

export default function store(initialState) {
	return createStore(
		combineReducers({
			addCommit
		}),
		initialState,
		applyMiddleware(thunk)
	);
};
