import { Fragment, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading-bar";
import { useAuth0 } from "@auth0/auth0-react";

import { handleInitialData } from "../actions/shared";

import Nav from "./Nav";
import Dashboard from "./Dashboard";
import PollPage from "./PollPage";
import Leaderboard from "./Leaderboard";
import { setAuthedUser } from "../actions/authedUser";
import NewPoll from "./NewPoll";

function App(props) {
  const { isLoading, user, isAuthenticated, loginWithRedirect } = useAuth0();

  const { isDataReady, dispatch } = props;

  useEffect(() => {
    const checkAuth = async () => {
      if (!isLoading && !isAuthenticated) {
        await loginWithRedirect({
          appState: { targetUrl: window.location.pathname },
        });
      }

      if (!isLoading && isAuthenticated) {
        dispatch(setAuthedUser(user.name));
        dispatch(handleInitialData());
      }
    };

    checkAuth();
  }, [dispatch, user, loginWithRedirect, isLoading, isAuthenticated]);

  return (
    <Fragment>
      <LoadingBar />
      {isLoading === false &&
        isAuthenticated === true &&
        isDataReady === true && (
          <Fragment>
            <Nav />
            <Routes>
              <Route exact path="/" element={<Dashboard />} />
              <Route path="/questions/:id" element={<PollPage />} />
              <Route path="/add" element={<NewPoll />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
            </Routes>
          </Fragment>
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
