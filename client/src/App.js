import React from "react"
//import logo from "./logo.svg"
//import {Counter} from "./features/counter/Counter"
import {MainPage} from "./redux/MainPage"
import {StateJSON} from "./redux/StateJSON"
import "./App.css"

/*
function App_() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.js</code> and alla save to rererreload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer">
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer">
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer">
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer">
            React Redux
          </a>
        </span>
      </header>
    </div>
  )
}
*/

function App() {
  return (
    <div>
      <h1>Ciao</h1>
      <MainPage />
      <StateJSON />
    </div>
  )
}

export default App
