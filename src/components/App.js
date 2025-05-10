import React, { useEffect, useState } from "react";

const App = () => {
  const [boy, setBoy] = useState("");
  const [girl, setGirl] = useState("");
  const [prediction, setPrediction] = useState("");
  useEffect(() => {
    return () => {};
  }, []);
  const result = {
    1: "Friends",
    2: "Love",
    3: "Affection",
    4: "Marriage",
    5: "Enemy",
    0: "Siblings",
  };
  function calc() {
    let bye = boy.toLowerCase();
    let grl = girl.toLowerCase();
    if (!bye || !grl) {
      setPrediction("Please Enter valid input");
      return;
    }
    let b = bye.split("").reduce((a, b) => {
      return {
        ...a,
        [b]: (a[b] || 0) + 1,
      };
    }, {});
    let c = grl.split("").reduce((acc, ele) => {
      if (b[ele] && b[ele] > 0) {
        b[ele]--;
        acc++;
      }
      return acc;
    }, 0);
    c=bye.length+grl.length-c;
    //Object.entries(b).map((acc,[key,val]) => acc + (b[key]?Math.abs(b[key]-val):val) );
    let len = c % 6;
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
          onClick={() => calc()}
        >
          Calculate Relation Future
        </button>
        <button
          data-testid="clear"
          name="clear"
          onClick={() => {
            setBoy("");
            setGirl("");
            setPrediction("");
          }}
        >
          Clear
        </button>
      </div>
      <h3 data-testid="answer">{prediction}</h3>
    </div>
  );
};

export default App;
