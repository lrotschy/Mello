import apiClient from "../lib/ApiClient";
import * as types from "../constants/ActionTypes";

export function createListRequest() {
  return { type: types.CREATE_LIST_REQUEST };
}

export function createListSuccess(list) {
  return {
    type: types.CREATE_LIST_SUCCESS,
    payload: {
      list
    }
  };
}

export function createList(boardId, title, callback) {
  return function(dispatch) {
    dispatch(createListRequest());

    apiClient.createList(boardId, title, newList => {
      dispatch(createListSuccess(newList));
    });

    if (callback) {
      callback();
    }
  };
}
