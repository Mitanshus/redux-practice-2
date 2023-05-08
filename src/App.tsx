import React, { InputHTMLAttributes, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch,useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actioncreators,State } from './state';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  num:number;
}

function App() {
  const[num,setNum]=useState(0)

  const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(event.target.value);
    setNum(isNaN(newValue) ? 0 : newValue);
  };  
  

  const dispatch= useDispatch();

  const{depositMoney,withdrawMoney,bankcruptMoney  }=bindActionCreators(actioncreators,dispatch)
  const amount =useSelector((state:State) => state.bank)

  return (
    <>
    <div className="App">
      <h1>{amount}</h1>
    </div>
    <div>
      <input type="text" value={num} onChange={handleNumberChange}  />
      <button onClick={() => depositMoney(num)}>deopsit</button>
      <button onClick={() => withdrawMoney(num)}>Withdraw</button>
      <button onClick={() => bankcruptMoney(0)}>bankcrupt</button>
    </div>
    </>
    
  );
}

export default App;
