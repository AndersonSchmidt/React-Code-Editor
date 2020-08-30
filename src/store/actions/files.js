export const FETCH_FILE = "FETCH_FILE";
export const DELETE_FILE = "DELETE_FILE";
export const SET_FILE_CONTENT = "SET_FILE_CONTENT";

export const fetchFile = (id) => {
  return async (dispatch) => {
    const response = await fetch(
      "https://my-json-server.typicode.com/open-veezoo/editor/files/" + id
    );

    if (response.ok) {
      const file = await response.json();
      dispatch({ type: FETCH_FILE, file: file });
    } else {
      throw new Error("Something went wrong");
    }
  };
};

export const saveFile = () => {
  return async (dispatch, getState) => {
    const file = getState().files.file;

    const response = await fetch(
      "https://my-json-server.typicode.com/open-veezoo/editor/files/" + file.id,
      {
        method: "PUT",
        body: JSON.stringify(file),
      }
    );

    if (!response.ok) {
      throw new Error("Something went wrong");
    }
  };
};

export const deleteFile = () => {
  return async (dispatch, getState) => {
    const file = getState().files.file;

    const response = await fetch(
      "https://my-json-server.typicode.com/open-veezoo/editor/files/" + file.id,
      {
        method: "DELETE",
      }
    );

    if (response.ok) {
      dispatch({ type: DELETE_FILE });
    } else {
      throw new Error("Something went wrong");
    }
  };
};

export const setFileContent = (content) => {
  return { type: SET_FILE_CONTENT, content: content };
};
