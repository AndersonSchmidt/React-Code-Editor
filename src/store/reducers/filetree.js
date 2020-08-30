import { FETCH_FILETREE, DELETE_FILETREE_FILE } from "../actions/filetree";

const initialState = {
  filetree: [],
};

const filetreeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FILETREE:
      return { filetree: action.filetree };
    case DELETE_FILETREE_FILE:
      const deleteFiletreeFile = (filetree) => {
        let newFiletree = [];
        filetree.forEach((file) => {
          if (file.id !== action.fileId) {
            if (file.isDirectory) {
              newFiletree.push({
                ...file,
                children: deleteFiletreeFile(file.children),
              });
            } else {
              newFiletree.push(file);
            }
          }
        });
        return newFiletree;
      };

      const newFiletree = deleteFiletreeFile(state.filetree);
      return { filetree: newFiletree };
    default:
      return state;
  }
};

export default filetreeReducer;
