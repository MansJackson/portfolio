import { combineReducers } from 'redux';
import { LinkAction, SET_ACTIVE_LINK } from './types';

const initialLinkState = 'Home'

const activeLinkReducer = (state = initialLinkState, action: LinkAction) => {
  switch (action.type) {
    case SET_ACTIVE_LINK:
      return action.payload;
    default:
      return state;
  }
}

export default combineReducers({
  activeLink: activeLinkReducer,
});