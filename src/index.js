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

const { domain, clientId } = getConfig();

const Auth0ProviderWithRedirectCallback = ({ children, ...props }) => {
  const navigate = useNavigate();
  const onRedirectCallback = (appState) => {
    console.log(appState);
    navigate((appState && appState.targetUrl) || window.location.pathname);
  };
  return (
    <Auth0Provider onRedirectCallback={onRedirectCallback} {...props}>
      {children}
    </Auth0Provider>
  );
};

const store = configureStore({ reducer, middleware });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Auth0ProviderWithRedirectCallback
      domain={domain}
      clientId={clientId}
      authorizationParams={{ redirect_uri: window.location.origin }}
      redirectUri={window.location.origin}
    >
      <Provider store={store}>
        <App />
      </Provider>
    </Auth0ProviderWithRedirectCallback>
  </BrowserRouter>
);
