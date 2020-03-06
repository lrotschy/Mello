import React, { Component } from "react";
import { Link } from "react-router-dom";
import CardModalHeader from "./CardModalHeader";
import CardModalMain from "./CardModalMain";
import CardModalAside from "./CardModalAside";

class CardModal extends Component {
  componentDidMount = () => {
    if (this.props.card) return;

    const cardId = this.props.match.params.id;

    this.props.onGetCard(cardId);
  };

  render() {
    if (!this.props.card || !this.props.list) return null;
    const { title: listTitle } = this.props.list;
    const { title, board_id } = this.props.card;

    return (
      <div id="modal-container">
        <div className="screen"></div>
        <div id="modal">
          <Link to={`/boards/${board_id}`}>
            <i className="x-icon icon close-modal"></i>
          </Link>
          <CardModalHeader
            listTitle={listTitle}
            title={title}
            boardId={board_id}
          />
          <CardModalMain />
          <CardModalAside />
        </div>
      </div>
    );
  }
}

export default CardModal;
