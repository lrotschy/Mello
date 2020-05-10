import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "../card/Card";
import * as actions from "../../actions/ListActions";
import * as cardActions from "../../actions/CardActions";

const mapStateToProps = (state, ownProps) => {
  const cards = state.cards.filter(card => card.list_id === ownProps.id);

  return {
    cards
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onUpdateTitle: title => {
      dispatch(actions.updateList({ title }, ownProps.id));
    },
    onCreateCard: (title, callback) => {
      dispatch(cardActions.createCard({ title }, ownProps.id, callback));
    }
  };
};

class List extends Component {
  state = {
    newCardTitle: "",
    editing: false,
    listTitle: this.props.title
  };

  toggleEditing = () => {
    this.setState(prevState => {
      return {
        editing: !prevState.editing
      };
    });
  };

  handleTextFieldUpdate = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleUpdateTitle = () => {
    this.props.onUpdateTitle(this.state.listTitle);
    this.toggleEditing();
  };

  handleAddACardClick = () => {
    this.props.onAddACardClick(this.props.id);
  };

  handleSaveNewCard = () => {
    this.props.onCreateCard(this.state.newCardTitle, this.handleAddACardClose);
  };

  handleAddACardClose = () => {
    this.setState({
      newCardTitle: ''
    })

    this.props.onAddACardClose();
  }

  render() {
    const { cards, title, isAddingCard } = this.props;
    const cardContainers = cards.map(card => <Card key={card.id} {...card} />);
    const listWrapperClassName = isAddingCard
      ? "list-wrapper add-dropdown-active"
      : "list-wrapper";
    const addDropdownClassName = isAddingCard
      ? "add-dropdown add-bottom active-card"
      : "add-dropdown add-bottom";

    return (
      <div className={listWrapperClassName}>
        <div className="list-background">
          <div className="list">
            <a className="more-icon sm-icon" href=""></a>
            <div>
              {this.state.editing ? (
                <input
                  name="listTitle"
                  className="list-title"
                  value={this.state.listTitle}
                  onChange={this.handleTextFieldUpdate}
                  onBlur={this.handleUpdateTitle}
                />
              ) : (
                <p className="list-title" onClick={this.toggleEditing}>
                  {this.state.listTitle}
                </p>
              )}
            </div>
            <div className="add-dropdown add-top">
              <div className="card"></div>
              <a className="button">Add</a>
              <i className="x-icon icon"></i>
              <div className="add-options">
                <span>...</span>
              </div>
            </div>
            <div id="cards-container" data-id="list-1-cards">
              {cardContainers}
            </div>
            <div className={addDropdownClassName}>
              <div className="card">
                <div className="card-info"></div>
                <textarea
                  name="newCardTitle"
                  value={this.state.newCardTitle}
                  onChange={this.handleTextFieldUpdate}
                />
                <div className="members"></div>
              </div>
              <a className="button" onClick={this.handleSaveNewCard}>
                Add
              </a>
              <i
                className="x-icon icon"
                onClick={this.handleAddACardClose}
              ></i>
              <div className="add-options">
                <span>...</span>
              </div>
            </div>
            <div
              className="add-card-toggle"
              data-position="bottom"
              onClick={this.handleAddACardClick}
            >
              Add a card...
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
