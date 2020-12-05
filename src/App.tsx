import React from "react";
import {
  BrowserRouter as Router,
} from "react-router-dom";


import { AppContent } from "./containers/AppContent/AppContent";
import { AppFooter } from "./containers/AppFooter/AppFooter";
import { AppHeader } from "./containers/AppHeader/AppHeader";
import "./App.less";

function App() {
  return (
    <Router>
      <div className="App">
        <AppHeader/>
        <AppContent/>
        <AppFooter/>
      </div>
    </Router>
  );
}

export default App;
