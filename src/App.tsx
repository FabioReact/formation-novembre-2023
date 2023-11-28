import { useState } from "react";
import classes from "./App.module.css";
import Paragraph from "./Paragraph";
import MyForm from "./Form"; // import par defaut
// import { Form as MyForm } from "./Form";
import Heroes from "./pages/Heroes";
import LearnUseEffect from "./pages/LearnUseEffect";

function App() {
  const headingStyle = {
    color: "red",
  };
  const onClickCallback = (arg: unknown) => {
    console.log("Button clicked", arg);
  };

  const [counter, setCounter] = useState(0);
  const [connected, setConnected] = useState(false);

  const logCallback = () => {
    setConnected((b) => !b)
  }

  const increment = () => {
    // Attention, les setState sont asynchrones
    setCounter((prevCounter) => prevCounter + 1); // -> callbackqueue, counter = 0
    setCounter((prevCounter) => prevCounter + 1); // -> callbackqueue, counter = 1
    // console.log(counter);
  }

  const [showLearnUseEffect, setShowLearnUseEffect] = useState(true)

  return (
    <>
      <h1 style={headingStyle} className={classes.textCenter}>
        Formation React
      </h1>
      <h2>Ambient-IT</h2>
      <button onClick={() => setShowLearnUseEffect(b => !b)}>Show/Hide</button>
      {showLearnUseEffect ? <LearnUseEffect /> : null}
      {/* <Paragraph content="Hello React" color="blue">
        <span>with Fabio</span>
      </Paragraph>
      <MyForm buttonFunction={onClickCallback} />
      <div>
        <p>Counter: {counter}</p>
        <button onClick={increment}>Incrementer</button>
      </div>
      <div>
        <p>{ connected ? 'Connecté' : 'Non connecté'}</p>
        <button onClick={logCallback}>Login/Logout</button>
      </div>
      <Heroes /> */}
    </>
  );
}

export default App;
