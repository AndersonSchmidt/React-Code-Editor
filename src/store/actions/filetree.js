export const FETCH_FILETREE = "FETCH_FILETREE";
export const DELETE_FILETREE_FILE = "DELETE_FILETREE_FILE";

export const fetchFiletree = () => {
  return async (dispatch) => {
    const response = await fetch(
      "https://my-json-server.typicode.com/open-veezoo/editor/filetree"
    );

    const filetree = await response.json();
    dispatch({ type: FETCH_FILETREE, filetree: filetree });
  };
};

export const deleteFiletreeFile = (fileId) => {
  return (dispatch) => {
    dispatch({ type: DELETE_FILETREE_FILE, fileId: fileId });
  };
};
