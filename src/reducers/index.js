import { combineReducers } from 'redux';
import DiaryReducer from './reducer_diary';

const rootReducer = combineReducers({
	diary: DiaryReducer
});

export default rootReducer;
