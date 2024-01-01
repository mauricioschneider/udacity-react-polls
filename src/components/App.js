import { Fragment, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading-bar";
import { useAuth0 } from "@auth0/auth0-react";

import { handleInitialData } from "../actions/shared";

import Nav from "./Nav";
import Dashboard from "./Dashboard";
import PollPage from "./PollPage";
import { setAuthedUser } from "../actions/authedUser";

function App(props) {
  const { isLoading, error, user, isAuthenticated, loginWithRedirect } =
    useAuth0();

  const { isDataReady } = props;

  useEffect(() => {
    if (!isLoading) {
      props.dispatch(handleInitialData());
    }
  }, [isLoading]);

  if (error) {
    // auth0 error
  }

  if (!isAuthenticated) {
    props.dispatch(setAuthedUser("tylermcginnis"));
    //return loginWithRedirect();
  } else {
    props.dispatch(setAuthedUser(user.name));
  }

  return (
    <Fragment>
      <LoadingBar />
      <Nav />
      {isDataReady === false ? null : (
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/poll/:id" element={<PollPage />} />
        </Routes>
      )}
    </Fragment>
  );
}

const mapStateToProps = ({ users, authedUser }) => {
  return {
    isDataReady: users[authedUser] ? true : false,
  };
};

export default connect(mapStateToProps)(App);
