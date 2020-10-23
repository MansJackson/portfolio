import { Dispatch } from "redux";
import { SET_ACTIVE_LINK } from "./types";

export const setActiveLinkAction = (link: string) => (dispatch: Dispatch) => {
  dispatch({
    type: SET_ACTIVE_LINK,
    payload: link,
  })
}