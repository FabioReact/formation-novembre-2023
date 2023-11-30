import { useState } from "react";
import Title from '../components/Title'

const LearnUseState = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    // Attention, les setState sont asynchrones
    setCounter((prevCounter) => prevCounter + 1); // -> callbackqueue, counter = 0
    setCounter((prevCounter) => prevCounter + 1); // -> callbackqueue, counter = 1
  };

  return (
    <section>
      <Title>Learn useState</Title>
      <div>
        <p>Counter: {counter}</p>
        <button onClick={increment}>Increment by 2</button>
      </div>
    </section>
  );
};

export default LearnUseState;
