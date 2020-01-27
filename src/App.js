import React from 'react';
import './App.css';
//import CounterClass from './CounterClass';
//import CounterHook from './CounterHook';
//import CounterClassLifeCycle from './CounterClassLifeCycle';
import CounterHookLifeCycle from './CounterHookLifeCycle';

function App() {
  return (
    <div className="App">
      <div>
      {/* <CounterClass />
      <CounterHook /> 
      <CounterClassLifeCycle />*/}
      <CounterHookLifeCycle />
      </div>
    </div>
  );
}

export default App;
