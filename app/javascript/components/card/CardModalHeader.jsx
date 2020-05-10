import React, { Component } from "react";
import { Link } from "react-router-dom";

class CardModalHeader extends Component {
  state = {
    title: this.props.title
  };

  handleTitleUpdate = e => {
    this.setState({
      title: e.target.value
    });
  };

  render() {
    return (
      <header>
        <i className="card-icon icon .close-modal"></i>
        <textarea
          className="list-title"
          style={{ height: "45px" }}
          value={this.state.title}
          onChange={this.handleTitleUpdate}
        />
        <p>
          in list <a className="link">{this.props.listTitle}</a>
          <Link to={`/boards/${this.props.boardId}`}>
            <i className="sub-icon sm-icon"></i>
          </Link>
        </p>
      </header>
    );
  }
}

export default CardModalHeader;
