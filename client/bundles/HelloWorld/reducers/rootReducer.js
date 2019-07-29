import { combineReducers } from 'redux';
import { NAME_UPDATE } from '../constants';

const name = (state = '', action) => {
  switch (action.type) {
    case NAME_UPDATE:
      return action.text;
    default:
      return state;
  }
};

const rootReducer = combineReducers({ name });

export default rootReducer;
