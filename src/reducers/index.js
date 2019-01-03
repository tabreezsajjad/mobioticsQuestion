import { combineReducers } from "redux";
import videoBrowseList from "./reducer";
export const rootReducer = combineReducers({
    videoBrowseList: videoBrowseList
});