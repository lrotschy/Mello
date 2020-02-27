import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardContainer from '../card/CardContainer'

const mapStateToProps = (state, ownProps) => {
  const cards = state.cards.filter((card) => card.list_id === ownProps.id);

  return {
    cards,
  };
};

class List extends Component {
  render() {
    const { cards, title } = this.props;
    const cardContainers = cards.map((card) => (
      <CardContainer
        key={card.id}
        description={card.description}
        dueDate={card.due_date}
        labels={card.labels}
      />
    ));

    return (
      <div className="list-wrapper">
        <div className="list-background">
          <div className="list">
            <a className="more-icon sm-icon" href=""></a>
            <div>
              <p className="list-title">{title}</p>
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

export default connect(mapStateToProps)(List);
