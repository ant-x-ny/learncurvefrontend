import { useState } from 'react';
import axios from 'axios';
import './calcres/calcStyle.css'

function Calculator() {
  let [num1, setNum1] = useState(0);
  let [num2, setNum2] = useState(0);
  let [result, setResult] = useState(0);

  function update(input) {
    if(num1 === 0) {
        setNum1(input);
    } else {
        setNum2(input);
    }
}
  function clear(){
    setNum1(0);
    setNum2(0);
    setResult(0);
  }
  function add(){
    setResult(num1+num2);
  }
  function sub(){
    setResult(num1-num2);
  }
  function mul(){
    setResult(num1*num2);
  }
  function div(){
    setResult(num1/num2);
  }

  async function handleResultAdd()  {
    let op = 'add';
    const response = await axios.post('https://learncurvebackend.onrender.com/calculate', {num1,num2, op});
    setResult(response.data)
}
async function handleResultSub()  {
  let op = 'sub';
  const response = await axios.post('https://learncurvebackend.onrender.com/calculate', {num1,num2, op});
  setResult(response.data)
}
async function handleResultMul()  {
  let op = 'mul';
  const response = await axios.post('https://learncurvebackend.onrender.com/calculate', {num1,num2, op});
  setResult(response.data)
}
async function handleResultDiv()  {
  let op = 'div';
  const response = await axios.post('https://learncurvebackend.onrender.com/calculate', {num1,num2, op});
  setResult(response.data)
}
  return (
      <div className='Bodysub'>
<h1 style={{ display: "flex", marginLeft: "93vh", marginTop: '100px', color:'black' }}>
  Calculator 0_0
</h1>
<div id="calcmain">
  <div id="calcdisplay">
    <input type="number" className="display" value={num1} style={{borderTopRightRadius:'0px', borderBottomRightRadius:'0px'}} placeholder="First Num" readOnly/>
    <input type="number" className="display" value={num2} style={{borderLeft:'2px solid black', borderTopLeftRadius:'0px', borderBottomLeftRadius:'0px'}} placeholder="Second Num" readOnly/>
  </div>
  <div id="calcinput">
    <div id="Bnums" style={{ width:'100%',flex:'4', flexWrap:'wrap',height:'200px'}}>
    <button className='Bnum' onClick={() => update(1)}>1</button>
    <button className='Bnum' onClick={() => update(2)}>2</button>
    <button className='Bnum' onClick={() => update(3)}>3</button>
    <button className='Bnum' onClick={() => update(4)}>4</button>
    <button className='Bnum' onClick={() => update(5)}>5</button>
    <button className='Bnum' onClick={() => update(6)}>6</button>
    <button className='Bnum' onClick={() => update(7)}>7</button>
    <button className='Bnum' onClick={() => update(8)}>8</button>
    <button className='Bnum' onClick={() => update(9)}>9</button>
    <button className='Bnum'id='B0' onClick={() => update()}>0</button>
    <button className="Bproc Bnum" id='Bclear' onClick={() => clear()}>Clear</button>
    </div>
    <div className='Btasks' style={{ width:'100%',flex:'2', height:'200px',flexWrap:'wrap'}}>
      <button className="Bproc" onClick={() => handleResultAdd()}>Add +</button>
      <button className="Bproc" onClick={() => sub()}>Sub -</button>
      <button className="Bproc" onClick={() => mul()}>Mul x</button>
      <button className="Bproc" onClick={() => div()}>Div /</button>
    </div>
  </div>
  <div id="calcoutput">
    <h1 id="outputdisplay">Result: {result}</h1>
  </div>
</div>
</div>
  );
}

export default Calculator;
