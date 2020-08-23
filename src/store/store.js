import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import filetreeReducer from "./reducers/filetree";
import filesReducer from "./reducers/files";

const rootReducer = combineReducers({
  filetree: filetreeReducer,
  files: filesReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default store;
