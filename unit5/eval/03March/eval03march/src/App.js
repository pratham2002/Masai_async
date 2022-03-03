import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Routing from "./components/Routes";

function App() {
  return (
    <div className="App">
      <header className="navbar">
        <Navbar />
        <Routing />
      </header>
    </div>
  );
}

export default App;
