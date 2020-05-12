import React from 'react';
import logo from './logo.svg';
import './App.css';
import MarvelList from './MarvelList/MarvelList';
import { windowConfig } from './Common/WindowConfig';


function App() {

console.log(windowConfig);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        MODIFIED 3
        </p>
  <div>envirorment REACT_APP_URLMARVEL: {process.env.REACT_APP_URLMARVEL}</div>
  <div>envirorment REACT_APP_INMINUTU_API_URL: {process.env.REACT_APP_API_URL}</div>
    <p> REACT_APP_API_URL runtime variable: { windowConfig._env_ .REACT_APP_API_URL} </p>
        <MarvelList/>
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
