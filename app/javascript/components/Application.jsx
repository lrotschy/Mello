import React from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";

import TopNav from "./shared/TopNav";
import BoardsDashboardContainer from "./dashboard/BoardsDashboardContainer";
import BoardContainer from "./board/BoardContainer";

class Application extends React.Component {
  static contextTypes = {
    store: PropTypes.object
  };

  componentDidMount() {
    const store = this.context.store;
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <div>
        <TopNav />
        <Route path="/" exact component={BoardsDashboardContainer} />
        <Route path="/(boards|cards)/:id" exact component={BoardContainer} />
        <Route path="/cards/:id" exact component={CardModalContainer} />
      </div>
    );
  }
}

export default Application;
