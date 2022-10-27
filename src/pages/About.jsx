import { useState } from "react";
import Layout from "../component/layout/Layout";
import DisplayCount from "../component/display/Display";
import ButtonCount from "../component/button-count/ButtonCount";
import UpdateIncrementDecrement from "../component/update-button/updateIncrementDecrement";

function About() {
  const [count, setCount] = useState(0);
  const [incrementValue, setIncrementValue] = useState(20);
  const [decrementValue, setDecrementValue] = useState(10);

  function increment() {
    setCount(count + incrementValue);
  }

  function decrement() {
    setCount(count - decrementValue);
  }

  function handelIncrementValue(e) {
    setIncrementValue(parseInt(e.target.value));
  }
  function handelDecrementValue(e) {
    setDecrementValue(parseInt(e.target.value));
  }
  return (
    <Layout>
      <h1> Hellow! I am a About Pages!</h1>
      <DisplayCount count={count} />
      <UpdateIncrementDecrement
        incrementValue={incrementValue}
        decrementValue={decrementValue}
        handelIncrementValue={handelIncrementValue}
        handelDecrementValue={handelDecrementValue}
      />
      <ButtonCount increment={increment} decrement={decrement} />
    </Layout>
  );
}

export default About;

/**
 ******************** What is main concept in React?
 *Designing  Component
 *  -Props
 *  -Component tree
 *  -State
 */

/**
 * When a componenet rerenders?
 *  -when props change
 *  -when state change
 *  -when parent rerender
 */
