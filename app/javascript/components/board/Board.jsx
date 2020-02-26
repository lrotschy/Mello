import React, { Component } from "react";
import BoardHeader from "./BoardHeader";
import ListDashboard from "../list/ListDashboard";

// ListsDashboard
// Lists
// List
// Header (List Title)
// AddCardToggle
// Link
// Form
// CardsDashboard
// Card
// Labels
// Text
// DueDate, Description, Comment
// Card
// Card
// List
// List -- Active
// NewList

class Board extends Component {
  componentDidMount = () => {
    const boardId = this.props.match.params.id;

    this.props.onGetBoard(boardId);
  };

  render() {
    return (
      <div>
        <BoardHeader />
        <main>
          <ListDashboard />
        </main>
      </div>
    );
  }
}

export default Board;
