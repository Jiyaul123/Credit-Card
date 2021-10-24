import React, {useState} from 'react';
import Cards from 'react-credit-cards';
import './App.css';
import 'react-credit-cards/es/styles-compiled.css';

function App() {
  const [number, setNumber] = useState('');
  const [focus, setFocus] = useState('');
  const [name, setName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [ccv, setCcv] = useState('');
  return (
    <div className="App">
      <Cards 
      number = {number}
      name = {name}
      expiry = {expiry}
      ccv = {ccv}
      focused = {focus}
      />
      <form>
      <input 
        type = 'tel'
        name = 'number'
        placeholder = 'Card Number'
        value = {number}
        onChange = {e => setNumber(e.target.value)}
        onFocus = {e => setFocus(e.target.name)}
      />

      <input
        type = 'text'
        name = 'name'
        placeholder = 'Account Holder Name'
        value = {name}
        onChange = {e => setName(e.target.value)}
        onFocus = {e => setFocus(e.target.name)}
      />

      <input
        type = 'tel'
        name = 'expiry'
        placeholder = 'MM/YY'
        value = {expiry}
        onChange = {e => setExpiry(e.target.value)}
        onFocus = {e => setFocus(e.target.name)}
      />

<input
        type = 'text'
        name = 'ccv'
        placeholder = 'CCV'
        value = {ccv}
        onChange = {e => setCcv(e.target.value)}
        onFocus = {e => setFocus(e.target.name)}
      />
      </form>
    </div>
  );
}

export default App;
