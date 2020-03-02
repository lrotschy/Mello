import { connect } from "react-redux";
import React from "react";
import ListContainer from "./ListContainer";
import ToggleableAddListForm from "./ToggleableAddListForm";

const mapStateToProps = state => {
  return {
    lists: state.lists
  };
};

const ListsContainer = ({ lists, boardId }) => {
  const listComponents = lists.map(({ title, id }) => (
    <ListContainer title={title} id={id} key={id} />
  ));

  return (
    <div id="list-container" className="list-container">
      <div id="existing-lists" className="existing-lists">
        {listComponents}
      </div>
      <ToggleableAddListForm boardId={boardId} />
    </div>
  );
};

export default connect(mapStateToProps, null)(ListsContainer);
