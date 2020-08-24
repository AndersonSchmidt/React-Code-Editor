import { FETCH_FILE } from "../actions/files";
import { UPDATE_FILE } from "../actions/files";
import { DELETE_FILE } from "../actions/files";

const initialState = {
  file: {},
};

const fileseducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FILE:
      return { file: action.file };
    case UPDATE_FILE:
      return { file: action.file };
    case DELETE_FILE:
      return { file: {} };
    default:
      return state;
  }
};

export default fileseducer;
