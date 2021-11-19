// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";

import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  // const incrementCounter = () => setCounter(counter + 1);
  // const incrementCounter = () =>
  //   setCounter(function (prevCounter) {
  //     return prevCounter + 1;
  //   });
  const [btnBoolean, setBtnBoolean] = useState(false);

  const changeHandle = () => {
    setBtnBoolean(true);
  };

  //   return (
  //     <div className="App">
  //       <h1>React Hooks</h1>
  //       <p>State value is: {counter}</p>
  //       <button onClick={incrementCounter}>Increment State by one</button>
  //     </div>
  //   );
  // }

  return (
    <div className="App">
      <h1>React Hooks</h1>
      <button onClick={changeHandle}>Click Me</button>
      {btnBoolean && <p>Hey There</p>}
    </div>
  );
}

export default App;
