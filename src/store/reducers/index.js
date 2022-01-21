import {
  combineReducers
} from 'redux';
import
loadReducer
from './load-reducers';

const finalReducer = {
  load: loadReducer
}

const rootReducer = combineReducers(finalReducer)

export default rootReducer