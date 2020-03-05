import { connect } from "react-redux";
import { fetchBoard } from "../../actions/BoardActions";
import React, { Component } from "react";
import BoardHeader from "./BoardHeader";
import ListsContainer from "../list/ListsContainer";

const mapStateToProps = (state, ownProps) => {
  let boardId;
  let card;

  if (ownProps.match.url.includes("card")) {
    card = state.cards.find(card => card.id === +ownProps.match.params.id);
    if (card) {
      boardId = card.board_id;
    } else {
      boardId = null;
    }
  } else {
    boardId = +ownProps.match.params.id;
  }

  if (boardId) {
    return {
      board: state.boards.find(board => board.id === boardId),
      card: card,
      boardId: boardId
    };
  } else {
    return {
      board: null,
      card: null,
      boardId: null
    };
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onGetBoard: boardId => {
      dispatch(fetchBoard(boardId));
    }
  };
};

class Board extends Component {
  componentDidMount = () => {
    let boardId;
    const { url } = this.props.match;
    if (url.match(new RegExp("^/boards/"))) {
      boardId = +this.props.match.params.id;
    } else {
      if (this.props.card) {
        boardId = this.props.card.board_id;
      } else {
        boardId = null;
      }
    }
    if (!boardId) return null;
    this.props.onGetBoard(boardId);
  };

  componentDidUpdate(prevProps) {
    if (this.props.boardId !== prevProps.boardId) {
      this.props.onGetBoard(+this.props.boardId);
    }
  }

  render() {
    console.log("match", this.props.match);
    if (this.props.board) {
      return (
        <div>
          <BoardHeader title={this.props.board.title} />

          <main>
            <ListsContainer boardId={this.props.board.id} />
          </main>
        </div>
      );
    }
    return null;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
