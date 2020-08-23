export const FETCH_FILETREE = "FETCH_FILETREE";

export const fetchFiletree = () => {
  return async (dispatch) => {
    const response = await fetch(
      "https://my-json-server.typicode.com/open-veezoo/editor/filetree"
    );

    const filetree = await response.json();
    dispatch({ type: FETCH_FILETREE, filetree: filetree });
  };
};
