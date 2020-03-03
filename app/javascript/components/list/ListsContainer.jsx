import { connect } from "react-redux";
import React, { Component } from "react";
import ListContainer from "./ListContainer";
import ToggleableAddListForm from "./ToggleableAddListForm";

const mapStateToProps = state => {
  return {
    lists: state.lists
  };
};

class ListsContainer extends Component {
  state = {
    listAddingCard: null
  };

  handleAddACardClick = id => {
    if (!this.state.listAddingCard) {
      this.setState({
        listAddingCard: id
      });
    }
  };

  handleAddACardClose = () => {
    this.setState({
      listAddingCard: null
    });
  };

  render() {
    const { lists, boardId } = this.props;

    const listComponents = lists.map(({ title, id }) => (
      <ListContainer
        title={title}
        id={id}
        key={id}
        isAddingCard={id === this.state.listAddingCard}
        onAddACardClick={this.handleAddACardClick}
        onAddACardClose={this.handleAddACardClose}
      />
    ));

    return (
      <div id="list-container" className="list-container">
        <div id="existing-lists" className="existing-lists">
          {listComponents}
        </div>
        <ToggleableAddListForm boardId={boardId} />
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(ListsContainer);
