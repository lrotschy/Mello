export default function listsReducer(state = [], action) {
  switch (action.type) {
    case "FETCH_BOARD_SUCCESS":
      return action.payload.board.lists.map(list => {
        const { cards, ...listWithoutCards } = list;
        return listWithoutCards;
      });
    case "CREATE_LIST_SUCCESS":
      return state.concat(action.payload.list);
    case "UPDATE_LIST_SUCCESS": 
      return state.map((list) => {
        if (list.id === action.payload.id) {
          return Object.assign({}, list, {title: action.payload.list.title})
        } else {
          return list;
        }
      })
    default:
      return state;
  }
}
