import React from "react";
import CardModal from "./CardModal"

const mapStateToProps = (state, ownProps) => {
  const cardId = +ownProps.match.params.id;
  const card = state.cards.find(c => c.id === cardId);

  return {
    card
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  
}


export default connect(mapStateToProps, mapDispatchToProps)(CardModal);