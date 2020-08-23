import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import filetreeReducer from "./reducers/filetree";

const rootReducer = combineReducers({
  filetree: filetreeReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default store;
