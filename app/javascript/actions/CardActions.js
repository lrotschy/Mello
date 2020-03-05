import apiClient from "../lib/ApiClient";

export function createCardRequest() {
  return { type: "CREATE_CARD_REQUEST" };
}

export function createCardSuccess(card) {
  return {
    type: "CREATE_CARD_SUCCESS",
    payload: {
      card
    }
  };
}

export function createCard(card, listId, callback) {
  return function(dispatch) {
    dispatch(createCardRequest());

    apiClient.createCard(card, listId, newCard => {
      dispatch(createCardSuccess(newCard));
    });

    if (callback) {
      callback();
    }
  };
}

export function getCardSuccess(card) {
  return {
    type: "GET_CARD_SUCCESS",
    payload: {
      card
    }
  };
}

export function getCard(id, callback) {
  return function(dispatch) {
    apiClient.getCard(id, card => {
      dispatch(getCardSuccess(card));
    });

    if (callback) {
      callback();
    }
  };
}
