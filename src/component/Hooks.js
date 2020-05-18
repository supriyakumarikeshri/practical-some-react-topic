import React, {useState,useEffect} from 'react';


function App() {
   const [count, setCount] = useState(0);
   const [count1, setCount1] = useState(50);
   const handleIncrement = () => {
     setCount(count + 1);
   };
   const handleDecrement = () => {
     setCount1(count1 - 1);
   };
   useEffect(() => {
     console.log("##########This will trigger when state is get updated,i am passing increment value,so if data is get incremented then useeffect will get called##########");
   },[count]);
  return (
    <div className="App"><h1 style={{"color":"red"}}>"useState"</h1> 
      <h1>Count Up: {count}</h1>
      <button type="button" onClick={handleIncrement}>Increment</button>
       <h1>Count Down: {count1}</h1>
      <button type="button" onClick={handleDecrement}>Decrement</button>
      <hr/>
      <h1>see console to see <span style={{"color":"red"}}>"useEffect"</span></h1> 
    </div>
  );
}

export default App;
