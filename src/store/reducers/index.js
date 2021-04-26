import { combineReducers } from 'redux';
import authorReducer from './authorReducer';
import authorSearchReducer from './authorSearchReducer';

const rootReducer = combineReducers({
  author: authorReducer,
  authorSearch: authorSearchReducer
});

export default rootReducer;
