import React, { useState } from "react";

const App = () => {
  const [boy, setBoy] = useState("");
  const [girl, setGirl] = useState("");
  const [prediction, setPrediction] = useState("");
  const result = {
    1: "Friends",
    2: "Love",
    3: "Affection",
    4: "Marriage",
    5: "Enemy",
    0: "Siblings"
  };
  function calc(){
    let b = boy;
    let bs = new Set(boy.split(""));
    let g = girl;
    let gs = new Set(girl.split(""));
    let c ="";
    for(let i of b){
        if(!gs.has(i)){
            c+=i;
        }
    }
    for(let i of g){
        if(!bs.has(i)){
            c+=i;
        }
    }
    let len = c.length%6;
    setPrediction(result[len]);
  }
  return (
    <div>
      <div id="main">
        <input
          type="text"
          placeholder="ente boy name"
          data-testid="input1"
          name="name1"
          value={boy}
          onChange={(e) => setBoy(e.target.value)}
        />
        <input
          type="text"
          placeholder="enter girl name"
          data-testid="input2"
          name="name2"
          value={girl}
          onChange={(e) => setGirl(e.target.value)}
        />
        <button
          data-testid="calculate_relationship"
          name="calculate_relationship"
          onClick={()=>calc()}
        >
          Calculate Relation Future
        </button>
        <button data-testid="clear" name="clear" onClick={()=>{
            setBoy("");
            setGirl('');
            setPrediction("");
        }}>
          Clear
        </button>
      </div>
      <h3>{prediction}</h3>
    </div>
  );
};

export default App;
