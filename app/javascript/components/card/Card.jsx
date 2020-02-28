import React, { Component } from "react";

const Card = ({ title, description, dueDate, labels }) => (
  <div className="card-background">
    <div className="card ">
      <i className="edit-toggle edit-icon sm-icon"></i>
      <div className="card-info">
        {labels.map((label, i) => (
          <div key={i} className={`card-label ${label} colorblindable`}></div>
        ))}
        <p>{title}</p>
      </div>
      <div className="card-icons">
        <i className="clock-icon sm-icon overdue-recent completed">{dueDate}</i>
        {description && <i className="description-icon sm-icon"></i>}
        <i className="comment-icon sm-icon"></i>
      </div>
    </div>
  </div>
);

export default Card;
