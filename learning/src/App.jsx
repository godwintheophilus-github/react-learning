import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Message from "./Message";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
        </div>
      </nav>
      <Message />
    </>
  );
}

export default App;
