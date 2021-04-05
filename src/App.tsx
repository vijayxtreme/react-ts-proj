import React from 'react';
import './App.css';

interface AppProps {
  color: string;
}

function App(props:AppProps) {
  return (
    <div>{props.color}</div>
  );
}

export default App;
