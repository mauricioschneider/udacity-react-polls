import { showLoading, hideLoading } from "react-redux-loading-bar";
import { getInitialData } from "../utils/api";

import { receivePolls } from "./polls";
import { receiveUsers } from "./users";

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData().then(({ users, polls }) => {
      dispatch(receiveUsers(users));
      dispatch(receivePolls(polls));
      dispatch(hideLoading());
    });
  };
}
