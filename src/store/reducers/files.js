import { FETCH_FILE } from "../actions/files";
import { UPDATE_FILE } from "../actions/files";
import { DELETE_FILE } from "../actions/files";
import { SET_OPENED_FILE_ID } from "../actions/files";

const initialState = {
  files: [],
  openedFileId: {},
};

const fileseducer = (state = initialState, action) => {
  let updatedFiles = [];
  switch (action.type) {
    case FETCH_FILE:
      return { ...state, files: [...state.files, action.file] };
    case UPDATE_FILE:
      updatedFiles = state.files.map((file) => {
        if (file.id === action.file.id) {
          return action.file.id;
        }
        return file;
      });
      return { files: updatedFiles };
    case DELETE_FILE:
      updatedFiles = state.files.filter((file) => {
        return file.id !== action.id;
      });
      return { files: updatedFiles };
    case SET_OPENED_FILE_ID:
      return { ...state, openedFileId: action.id };
    default:
      return state;
  }
};

export default fileseducer;
