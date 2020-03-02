import { connect } from "react-redux";
import { createList } from "../../actions/ListActions";
import React, { Component } from "react";

const mapDispatchToProps = (dispatch, ownProps) => ({
  onCreateList: (title, callback) => {
    dispatch(createList(ownProps.boardId, title, callback));
  }
});

class ToggleableAddListForm extends Component {
  state = {
    newListNameField: "",
    showForm: false
  };

  toggleShowForm = () => {
    this.setState(prevState => {
      return {
        showForm: !prevState.showForm
      };
    });
  };

  handleNewListNameChange = e => {
    const { value } = e.target;
    this.setState({
      newListNameField: value
    });
  };

  handleSaveNewList = () => {
    if (this.state.newListNameField === "") return;

    this.props.onCreateList(this.state.newListNameField, () => {
      this.setState({
        newListNameField: ""
      });
    });
  };

  render() {
    let newListClass = this.state.showForm ? "new-list selected" : "new-list";
    return (
      <div id="new-list" className={newListClass}>
        <span onClick={this.toggleShowForm}>Add a list...</span>

        <input
          type="text"
          placeholder="Add a list..."
          value={this.state.newListNameField}
          onChange={this.handleNewListNameChange}
        />
        <div>
          <input
            type="submit"
            className="button"
            value="Save"
            onClick={this.handleSaveNewList}
          />
          <i className="x-icon icon" onClick={this.toggleShowForm}></i>
        </div>
      </div>
    );
  }
}

// export default ToggleableAddListForm;
export default connect(null, mapDispatchToProps)(ToggleableAddListForm);
