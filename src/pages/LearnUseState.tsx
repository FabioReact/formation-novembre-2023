import { useState } from "react";

const LearnUseState = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    // Attention, les setState sont asynchrones
    setCounter((prevCounter) => prevCounter + 1); // -> callbackqueue, counter = 0
    setCounter((prevCounter) => prevCounter + 1); // -> callbackqueue, counter = 1
  };

  return (
    <section>
      <h1>Learn useState</h1>
      <div>
        <p>Counter: {counter}</p>
        <button onClick={increment}>Increment by 2</button>
      </div>
    </section>
  );
};

export default LearnUseState;
