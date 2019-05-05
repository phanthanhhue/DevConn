import { combineReducers } from "redux";
import authReducer from "./reducers/authReducer";
import errorReducer from "./reducers/errorReducer";
import profileReducer from "./reducers/profileReducer";
import postReducer from "./reducers/postReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  profile: profileReducer,
  post: postReducer
});
