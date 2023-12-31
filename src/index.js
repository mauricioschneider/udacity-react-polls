import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, useNavigate } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { getConfig } from "./auth0_config";
import { Auth0Provider } from "@auth0/auth0-react";

import "./index.css";
import App from "./components/App";
import middleware from "./middleware";
import reducer from "./reducers";

// Auth0 setup
const useOnRedirectCallback = (appState) => {
  const navigate = useNavigate();
  const navigateTo =
    appState && appState.returnTo
      ? appState.returnTo
      : window.location.pathname;

  navigate(navigateTo);
};

const auth0Config = getConfig();

const providerConfig = {
  domain: auth0Config.domain,
  clientId: auth0Config.clientId,
  useOnRedirectCallback,
  authorizationParams: {
    redirect_uri: window.location.origin,
    ...(auth0Config.audience ? { audience: auth0Config.audience } : null),
  },
};

const store = configureStore({ reducer, middleware });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider {...providerConfig}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </Auth0Provider>
);
