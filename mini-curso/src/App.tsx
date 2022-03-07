import React, {Fragment, useState} from 'react';
import Header from './components/Header';
import Menu from './components/Menu'

function App() {

  const [counter, setCounter] = useState(1)

  function handleButtonClick(){
    setCounter(counter + 1)
    console.log(counter)
  }

  return (
    <Fragment>
      <Header title="Página Inicial"></Header>
      <h1> Hello Dev! </h1>
      <p>{counter}</p>
      <button onClick={handleButtonClick}>Incrementar</button>
      <Menu>
        <ul>
          <li>Teste</li>
          <li>Teste</li>
          <li>Teste</li>
        </ul>
      </Menu>
    </Fragment>  
  );
}

export default App;
