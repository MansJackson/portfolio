import { Dispatch } from 'redux';
import { SET_ACTIVE_LINK } from './types';

export const setActiveLinkAction = (link: string) => (dispatch: Dispatch): void => {
  dispatch({
    type: SET_ACTIVE_LINK,
    payload: link,
  });
};
