import { FETCH_FILE, DELETE_FILE, SET_FILE_CONTENT } from "../actions/files";

const initialState = {
  file: {},
};

const fileseducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FILE:
      return { file: action.file };
    case DELETE_FILE:
      return { file: {} };
    case SET_FILE_CONTENT:
      return { file: { ...state.file, content: action.content } };
    default:
      return state;
  }
};

export default fileseducer;
