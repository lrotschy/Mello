export default function listsReducer(state = [], action) {
  switch (action.type) {
    case "FETCH_BOARD_SUCCESS":
      return action.payload.board.lists.map(list => {
        const { cards, ...listWithoutCards } = list;
        return listWithoutCards;
      });
    default:
      return state;
  }
}
