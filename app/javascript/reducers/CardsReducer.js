export default function cardsReducer(state = [], action) {
  switch (action.type) {
    case 'FETCH_BOARD_SUCCESS':
      return action.payload.board.lists.reduce((allCards, list) => {
        const { cards } = list;

        return allCards.concat(cards);
      }, []);
    default:
      return state;
  }
}
