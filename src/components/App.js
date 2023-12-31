import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

import Nav from "./Nav";
import Dashboard from "./Dashboard";

function App() {
  return (
    <Fragment>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
      </Routes>
    </Fragment>
  );
}

export default App;
