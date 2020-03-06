import React, { Component } from "react";
import { Link } from "react-router-dom";

class Card extends Component {
  render() {
    const { labels, title, dueDate, description, id } = this.props;

    return (
      <div className="card-background">
        <Link to={`/cards/${id}`}>
          <div className="card ">
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
        </Link>
      </div>
    );
  }
}

export default Card;
