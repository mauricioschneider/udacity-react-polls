import { Fragment, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";

import { handleInitialData } from "../actions/shared";

import Nav from "./Nav";
import Dashboard from "./Dashboard";

function App(props) {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);
  return (
    <Fragment>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
      </Routes>
    </Fragment>
  );
}

const mapStateToProps = () => {};

export default connect(mapStateToProps)(App);
