import {combineReducers} from "redux";
import {appReducer} from "./app.reducer";
import {listReducer} from "./list.reducer";

export const RootReducer = combineReducers({
    app: appReducer,
    list:listReducer
});