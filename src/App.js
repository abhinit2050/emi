import React, {useState} from 'react'
import './App.css';

function App() {
  const [prin,setPrin] = useState("");
  const [roi,setRoi] = useState("");
  const [tenure,setTenure] = useState("");
  const [emi,setEmi] = useState("0");

  function handlePrin (event){
    const newPrin = event.target.value;
    setPrin(newPrin);
  }

  function handleRate (event){
    const newRate = event.target.value;
    setRoi(newRate);
  }

  function handleTenure (event){
    const newTenure = event.target.value;
    setTenure(newTenure);
  }

  function emiCalculator(){
    const r = roi/1200 ;
    const emif = r*((1+r)**tenure)/(((1+r)**tenure)-1);
    
    setEmi(prin*emif);
    console.log(emi);
  }

  return (
    <div className="container">
        <div className="emiCal">
      
      <div>
      <label className = "form-label mx-3" onChange={handlePrin} value = {prin}>Principal amount:
        <input type="text" />
        </label>
        </div>
        <label className = "form-label mx-3" onChange={handleRate} value = {roi}>Rate of Interest:
        <input type="text" />
        </label>
        <label className = "form-label mx-3" onChange={handleTenure} value = {tenure}>Tenure (months):
        <input type="text" />
        </label>
    </div>
    <div className="container">
        <button onClick = {emiCalculator} className = "btn btn-primary my-3">Calculate EMI</button>
        </div>

        <h2>The Equated Monthly Installment is {Math.round(emi)+1} </h2> 
        <h2>Total Interest to be paid is Rs {Math.round(((Math.round(emi)+1)*tenure) - prin)}</h2>

      </div>
    
  );
}

export default App;
