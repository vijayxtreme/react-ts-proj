import React, {useState} from 'react';
import './App.css';

interface AppProps {
  color: string;
}

function App(props:AppProps):JSX.Element {
  let [counter, setCounter] = useState(0)

  let onIncrement = ():void => {
    setCounter(counter + 1)
  }

  let onDecrement = ():void => {
    setCounter(counter - 1)
  }

  return (
    <>
      <div>{props.color}</div>
      <div>{counter}</div>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </>
  );
}

export default App;
