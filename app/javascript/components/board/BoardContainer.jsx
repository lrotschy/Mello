import { connect } from "react-redux";
import { fetchBoard } from "../../actions/BoardActions";
import React, { Component } from "react";
import BoardHeader from "./BoardHeader";
import ListsContainer from "../list/ListsContainer";

const mapStateToProps = (state, ownProps) => {
  return {
    board: state.boards.find(board => {
      return board.id === +ownProps.match.params.id;
    })
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onGetBoard: () => {
    let boardId;

    if (ownProps.match.url.includes("card")) {
      console.log();
    } else {
      boardId = +ownProps.match.params.id;
    }

    dispatch(fetchBoard(boardId));
  }
});

class Board extends Component {
  componentDidMount = () => {
    this.props.onGetBoard();
  };

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
