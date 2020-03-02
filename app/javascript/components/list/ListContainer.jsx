import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "../card/Card";
import * as actions from "../../actions/ListActions";


const mapStateToProps = (state, ownProps) => {
  const cards = state.cards.filter(card => card.list_id === ownProps.id);

  return {
    cards
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onUpdateTitle: (title) => {
      dispatch(actions.updateList({title}, ownProps.id))  
    }
  }
}

class List extends Component {
  state = {
    editing: false,
    listTitle: this.props.title
  }

  toggleEditing = () => {
    this.setState(prevState => {
      return {
        editing: !prevState.editing
      }
    })
  }

  handleChangeTitle = (e) => {
    let newTitle = e.target.value
    this.setState({
      listTitle: newTitle
    })
  }

  handleUpdateTitle = () => {
    this.props.onUpdateTitle(this.state.listTitle);
    this.toggleEditing();
  }

  render() {
    const { cards, title } = this.props;
    const cardContainers = cards.map(card => <Card key={card.id} {...card} />);

    return (
      <div className="list-wrapper">
        <div className="list-background">
          <div className="list">
            <a className="more-icon sm-icon" href=""></a>
            <div>
              { this.state.editing ? 
                <input className="list-title" value={this.state.listTitle} onChange={this.handleChangeTitle} onBlur={this.handleUpdateTitle}/> :
                <p className="list-title" onClick={this.toggleEditing}>{this.state.listTitle}</p>
              }
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
            <div className="add-dropdown add-bottom">
              <div className="card">
                <div className="card-info"></div>
                <textarea name="add-card"></textarea>
                <div className="members"></div>
              </div>
              <a className="button">Add</a>
              <i className="x-icon icon"></i>
              <div className="add-options">
                <span>...</span>
              </div>
            </div>
            <div className="add-card-toggle" data-position="bottom">
              Add a card...
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
