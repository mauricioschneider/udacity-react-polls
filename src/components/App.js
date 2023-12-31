import { Fragment, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";

import { handleInitialData } from "../actions/shared";

import Nav from "./Nav";
import Dashboard from "./Dashboard";
import Loading from "./Loading";

function App(props) {
  const { isLoading, error, user, isAuthenticated, loginWithRedirect, logout } =
    useAuth0();

  useEffect(() => {
    if (!isLoading) {
      props.dispatch(handleInitialData());
    }
  }, [isLoading]);

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  if (!isAuthenticated) {
    loginWithRedirect();
  }

  return (
    <Fragment>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
      </Routes>
    </Fragment>
  );
}

const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps)(App);
