import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Message from "./Message";
import "./App.css";

function App() {
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
        </div>
      </nav>
      <Message />
    </>
  );
}

export default App;
