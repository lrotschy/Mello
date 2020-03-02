export default function listsReducer(state = [], action) {
  switch (action.type) {
    case "FETCH_BOARD_SUCCESS":
      return action.payload.board.lists.map(list => {
        const { cards, ...listWithoutCards } = list;
        return listWithoutCards;
      });
    case "CREATE_LIST_SUCCESS":
      return state.concat(action.payload.list);
    default:
      return state;
  }
}
