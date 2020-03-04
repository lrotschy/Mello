import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Card extends Component {
  state = {
    redirect: false
  };

  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to={`/cards/${this.props.id}`} />;
    }
  };

  render() {
    const { labels, title, dueDate, description } = this.props;

    return (
      <div className="card-background">
        {this.renderRedirect()}
        <div className="card " onClick={this.setRedirect}>
          <i className="edit-toggle edit-icon sm-icon"></i>
          <div className="card-info">
            {labels.map((label, i) => (
              <div
                key={i}
                className={`card-label ${label} colorblindable`}
              ></div>
            ))}
            <p>{title}</p>
          </div>
          <div className="card-icons">
            <i className="clock-icon sm-icon overdue-recent completed">
              {dueDate}
            </i>
            {description && <i className="description-icon sm-icon"></i>}
            <i className="comment-icon sm-icon"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
