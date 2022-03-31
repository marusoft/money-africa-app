import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notifications from "./components/Notifications";
import React, { Fragment } from "react";
import GlobalStyles from "./components/GlobalStyles";
import NavBar from "./components/NavBar";
import ErrorPage from "./components/ErrorPage";
import OhNoPageError from "./components/OhNoPageError";

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <GlobalStyles /> {/*In this component, i stored all my global styles */}
        <NavBar />
        <Routes>
          <Route path="/" element={<Notifications />} />
          <Route path="/ErrorPage" element={<ErrorPage />} />
          <Route path="/OhNoPageError" element={<OhNoPageError />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
