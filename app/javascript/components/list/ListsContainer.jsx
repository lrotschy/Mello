import { connect } from "react-redux";
import React from "react";
import ListContainer from "./ListContainer";

const mapStateToProps = state => {
  return {
    lists: state.lists
  };
};

const ListsContainer = ({ lists }) => {
  const listComponents = lists.map(({ title, id }) => (
    <ListContainer title={title} id={id} key={id} />
  ));

  return (
    <div id="list-container" className="list-container">
      <div id="existing-lists" className="existing-lists">
        {listComponents}
      </div>
      <div id="new-list" className="new-list">
        <span>Add a list...</span>
        <input type="text" placeholder="Add a list..." />
        <div>
          <input type="submit" className="button" value="Save" />
          <i className="x-icon icon"></i>
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, null)(ListsContainer);
