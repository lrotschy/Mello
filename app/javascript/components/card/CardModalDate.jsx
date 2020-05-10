import React from "react";
import moment from "moment";

const formattedDueDate = card => {
  const momentDate = moment(card.due_date);
  let formatString;

  if (momentDate.toDate().getFullYear() === new Date().getFullYear()) {
    formatString = "MMM D [at] h:mm A";
  } else {
    formatString = "MMM D, YYYY [at] h:mm A";
  }

  let formatted = momentDate.format(formatString);

  return `${formatted}${dueStatus(card)}`;
};

const dueClass = card => {
  var diff =
    (moment(card.due_date).toDate() - new Date()) / (1000 * 60 * 60 * 24);

  if (card.completed) {
    return "completed";
  } else if (diff < -1) {
    return "overdue";
  } else if (diff < 0) {
    return "overdue-recent";
  } else if (diff < 1) {
    return "due-soon";
  } else {
    return "due-later";
  }
};

const dueStatus = card => {
  var diff =
    (moment(card.due_date).toDate() - new Date()) / (1000 * 60 * 60 * 24);

  if (card.completed) {
    return "";
  } else if (diff < -1) {
    return " (past due)";
  } else if (diff < 0) {
    return " (recently past due!)";
  } else if (diff < 1) {
    return " (due soon)";
  } else {
    return "";
  }
};

const CardModalDate = ({ card }) => {
  return (
    <li className="due-date-section">
      <h3>Due Date</h3>
      <div id="dueDateDisplay" className={dueClass(card)}>
        <input
          id="dueDateCheckbox"
          type="checkbox"
          className="checkbox"
          checked=""
        />
        {formattedDueDate(card)}
        <span>{dueStatus(card)}</span>
      </div>
    </li>
  );
};

export default CardModalDate;
