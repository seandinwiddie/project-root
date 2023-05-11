import { createStore, combineReducers } from 'redux';
import sampleReducer from './modules/sample/reducers';

const rootReducer = combineReducers({
  sample: sampleReducer,
});

const store = createStore(rootReducer);

export default store;
