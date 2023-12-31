import { combineReducers } from "@reduxjs/toolkit";
import users from "./users";
import polls from "./polls";

export default combineReducers({
  users,
  polls,
});
