import { FETCH_FILETREE } from "../actions/filetree";

const initialState = {
  filetree: [],
};

const filetreeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FILETREE:
      return { filetree: action.filetree };
    default:
      return state;
  }
};

export default filetreeReducer;
