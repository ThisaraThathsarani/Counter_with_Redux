import { createStore, combineReducers } from "redux"
import { countReducer } from "./Reducers/countReducers"
import { composeWithDevTools } from "redux-devtools-extension"

const reducer = combineReducers({
    counter: countReducer,
});

const store = createStore(reducer, composeWithDevTools());

export default store;
