import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Greeting } from "./Greeting.jsx";
import { Time } from "./Time.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Greeting />
      <Time />
    </>
  );
}

export default App;
