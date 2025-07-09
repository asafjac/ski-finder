import React from "react";
import NavBar from "./components/navbar/nav-bar";
import Resorts from "./components/resorts/resorts.tsx";

const App: React.FC = () => {
  return (
    <div className="app">
      <NavBar />
      <Resorts />
    </div>
  );
};

export default App;
