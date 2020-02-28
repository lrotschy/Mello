import React, { Component } from 'react';

class ToggleableAddListForm extends Component {
  state = {showForm: false}

  toggleShowForm = () => {
    this.setState(prevState => {
      return {
        showForm: !prevState.showForm
      }
    }) 
  }

  render() {
    let newListClass = this.state.showForm ? "new-list selected" : "new-list"
    return (
      <div id="new-list" className={newListClass}>
        
        <span
          onClick={this.toggleShowForm}
        >
          Add a list...
        </span>

        <input type="text" placeholder="Add a list..." />
        <div>
          <input type="submit" className="button" value="Save" />
          <i className="x-icon icon" onClick={this.toggleShowForm}></i>
        </div>
      </div>
    )
  }
}

export default ToggleableAddListForm;

