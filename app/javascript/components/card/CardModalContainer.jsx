import { connect } from "react-redux";
import React from "react";
import CardModal from "./CardModal";
import * as cardActions from "../../actions/CardActions";

const mapStateToProps = (state, ownProps) => {
  const cardId = +ownProps.match.params.id;
  const card = state.cards.find(c => c.id === cardId);
  const list = state.lists.find(list => list.id === card.list_id);

  if (list) {
    return {
      list,
      card
    };
  }

  return {
    list: null,
    card
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onGetCard: id => {
      dispatch(cardActions.getCard(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardModal);
