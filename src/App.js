import React from 'react';
import { useState } from 'react';

import './style.css';

export default function App() {
  const [numero, setNumero] = useState(0);
  const [bool, setBool] = useState(true);
  const [date, setDate] = useState(Date);

  const hanldeAdd = () => {
    setNumero(numero + 1);
  };

  const Quitar = () => {
    if (numero >= 1) {
      setNumero(numero - 1);
    }
  };

  const handleChangeBool = () => {
    setBool(!bool);
    console.log(bool);
  };

  return (
    <div>
      <h1>Hello Stack</h1>
      <p>{numero}</p>
      <h3>{date}</h3>

      <button onClick={hanldeAdd}> Sumador </button>

      <button onClick={Quitar}> Resta</button>
      <hr />
      <button onClick={handleChangeBool}>Cambiar Bool</button>
    </div>
  );
}
