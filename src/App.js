import { useState } from "react";

import { Dromologia } from "./components/Dromologia";
import { Message } from "./components/Message";
import Button from "./components/Button";

import "./App.css";

function App() {
  const [toShow, setToShow] = useState(0);

  const Buttons = () => {
    return (
      <div className="buttons">
        <Button
          buttonClassName="minima"
          tittle="Μήνυμα Διοικητή"
          click={() => setToShow(1)}
        />
        <Button
          buttonClassName="dromologia"
          tittle="Δρομολόγια ΚΤΕΛ"
          click={() => setToShow(2)}
        />
      </div>
    );
  };

  const handleShowState = (number) => {
    setToShow(number);
  }

  return (
    <div className="App">
      {toShow === 0 ? (
        <Buttons />
      ) : toShow === 1 ? (
        <Message />
      ) : toShow === 2 ? (
        <Dromologia onSubmit={handleShowState}/>
      ) : (
        {}
      )}
    </div>
  );
}

export default App;
