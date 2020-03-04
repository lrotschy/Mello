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

export function createCard (card, listId, callback) {
  return function(dispatch) {
    dispatch(createCardRequest()); 

    apiClient.createCard(card, listId, newCard => {
      dispatch(createCardSuccess(newCard));
    });

    if (callback) {
      callback();
    }
  }
}
