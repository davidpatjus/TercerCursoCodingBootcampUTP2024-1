import React from "react";
import CharacterList from "./components/CharacterList";
import "./App.css"; 

function App() {
  return (
    <div className="container">
      <h1 className="header">RICK AND MORTY API</h1>
      <h1 className="header">BY: DAVID PATIÑO</h1>
      <CharacterList />
    </div>
  );
}

export default App;