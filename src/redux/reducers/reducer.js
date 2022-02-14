import { act } from "react-dom/cjs/react-dom-test-utils.production.min";
import { combineReducers } from "redux";
import todos from "./todos";
import filter from "./filter";

const initialState = {todos: [], filter: 'ALL'};

const reducer = combineReducers({
    todos,
    filter,
});

export default reducer;