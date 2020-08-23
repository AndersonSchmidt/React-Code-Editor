export const FETCH_FILE = "FETCH_FILE";
export const UPDATE_FILE = "UPDATE_FILE";
export const DELETE_FILE = "DELETE_FILE";
export const SET_OPENED_FILE_ID = "SET_OPENED_FILE_ID";

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

export const updateFile = (file) => {
  return async (dispatch) => {
    const response = await fetch(
      "https://my-json-server.typicode.com/open-veezoo/editor/files/" + file.id,
      {
        method: "PUT",
        body: JSON.stringify(file),
      }
    );

    if (response.ok) {
      dispatch({ type: UPDATE_FILE, file: file });
    } else {
      throw new Error("Something went wrong");
    }
  };
};

export const deleteFile = (id) => {
  return async (dispatch) => {
    const response = await fetch(
      "https://my-json-server.typicode.com/open-veezoo/editor/files/" + id,
      {
        method: "DELETE",
      }
    );

    if (response.ok) {
      dispatch({ type: DELETE_FILE, id: id });
    } else {
      throw new Error("Something went wrong");
    }
  };
};

export const setOpenedFileId = (id) => {
  return (dispatch) => {
    dispatch({ type: SET_OPENED_FILE_ID, id: id });
  };
};
