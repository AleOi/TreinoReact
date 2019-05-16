import React from 'react';
import './App.css';
// import MeuComponente from './Component/Greet';
import { Greet } from './Component/Greet';
import Welcome from './Component/Welcome';
import Hello from './Component/Hello';
import Counter from './Component/Counter';
import BtnClick from './Component/BtnClick'
import BtnClickClass from './Component/BtnClickClass';
import NameList from './Component/NameList';
import Ninja from './Component/Ninja';

function App() {
  return (
    <div className="App">
      {/* <MeuComponente /> */}
      {/* <Greet name="Alexandre" heroName = "SPEED">
        <h1 style ={ {color : 'blue'}}  > Propriedade filha</h1>
      </Greet>
      <Welcome name = "Bakigo"></Welcome>
      <Hello></Hello>
      <Counter></Counter>
      <BtnClick></BtnClick>
      <BtnClickClass />
      <NameList /> */}

      <Ninja></Ninja>
    </div>
  );
}

export default App;
