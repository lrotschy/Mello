import React, { Component } from 'react';

class CardModalForm extends Component {
  state = {
    showForm: false,
    description: this.props.description
  }

  handleToggleForm = () => {
    this.setState((prevState) => {
      return {
        showForm: !prevState.showForm
      }
    })
  }

  render() {
    if (this.state.showForm) {
      return (
        <form className="description">
          <p>Description</p>
          <textarea className="textarea-toggle" rows="1" autofocus value={this.state.description} />
          <div>
            <div className="button" value="Save">Save</div>
            <i className="x-icon icon" onClick={this.handleToggleForm}></i>
          </div>
        </form>
      )
    } else {
      return (
        <form className="description">
          <p>Description</p>
          <span id="description-edit" className="link" onClick={this.handleToggleForm}>
            Edit
        </span>
          <p className="textarea-overlay">
            {this.state.description}
          </p>
          <p id="description-edit-options" className="hidden">
            You have unsaved edits on this field.{" "}
            <span className="link">View edits</span> -{" "}
            <span className="link">Discard</span>
          </p>
        </form>
      )
    }
  }
}

export default CardModalForm;