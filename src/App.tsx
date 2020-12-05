import React from "react";

import "./App.less";
import { AppContent } from "./containers/AppContent/AppContent";
import { AppFooter } from "./containers/AppFooter/AppFooter";
import { AppHeader } from "./containers/AppHeader/AppHeader";

function App() {
  return (
    <div className="App">
      <AppHeader/>
      <AppContent/>
      <AppFooter/>
    </div>
  );
}

export default App;
