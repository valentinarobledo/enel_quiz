import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter, Route } from "react-router-dom";

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
}*/
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import Quiz1 from "./components/Quiz1";
import Quiz2 from "./components/Quiz2";
import Quiz3 from "./components/Quiz3";
import Quiz4 from "./components/Quiz4";
import Quiz5 from "./components/Quiz5";
const App = () => {
  return (
    <>
   

        <HashRouter>
          <Route path="/" exact component={Home} />
          <Route path="/quiz" component={Quiz} />
          <Route path="/quiz1" component={Quiz1} />
          <Route path="/quiz2" component={Quiz2} />
          <Route path="/quiz3" component={Quiz3} />
          <Route path="/quiz4" component={Quiz4} />
          <Route path="/quiz5" component={Quiz5} />
        </HashRouter>
    </>
  ); // La etiqueta <> </> Hace referencia a los fragments en react
};

export default App;
