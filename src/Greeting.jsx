import { useState } from "react";

export function Greeting() {
  const [nameInput, setNameInput] = useState("");
  const [isNameSubmitted, setIsNameSubmitted] = useState(true);

  function setName(e) {
    setNameInput(e.target.value);
  }

  function displayGreeting(e) {
    if (e.key === "Enter") {
      setIsNameSubmitted(false);
    }
  }

  return (
    <>
      <div className="greeting-container">
        {isNameSubmitted ? (
          <>
            <h1>What is your name?</h1>
            <input type="text" onChange={setName} onKeyDown={displayGreeting} />
          </>
        ) : (
          <h1>Hello, {nameInput} </h1>
        )}
      </div>
    </>
  );
}
