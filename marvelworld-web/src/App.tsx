import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MarvelList from "./MarvelList/MarvelList";
import { windowConfig } from "./Common/WindowConfig";
import env from "@beam-australia/react-env";

function App() {
  console.log(windowConfig);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload. MODIFIED 3
        </p>
        <div>
        <small>
            Current environment2: <b>{env("NODE_ENV")}</b>.
          </small>
          <small>
           | REACT_APP_API_URL2: <b>{env("API_URL")}</b>.
          </small>
          <small>
           | REACT_APP_MARVE2L: <b>{env("MARVEL")}</b>.
          </small>
          
        
        </div>
        <MarvelList />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
