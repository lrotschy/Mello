export default function cardsReducer(state = [], action) {
  switch (action.type) {
    case "FETCH_BOARD_SUCCESS":
      return action.payload.board.lists.reduce((allCards, list) => {
        const { cards } = list;

        return allCards.concat(cards);
      }, []);
    case "CREATE_CARD_SUCCESS":
      return state.concat(action.payload.card);
    case "GET_CARD_SUCCESS":
      return state.concat(action.payload.card);
    default:
      return state;
  }
}
