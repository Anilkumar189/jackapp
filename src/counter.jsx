 import React from "react";
   function Counter(){
    function inc(){
        setCount(count+1)
    }
    function dec(){
        setCount(count-1)
    }
    function rec(){
        setCount(count=0)
    }
   
 var [count,setCount]=React.useState(0)
 return <div className="border dorder-2 border-info m-2 p-2 ">
    <h1>Counter:{count}</h1>
    <button onClick={()=>{inc()}}>increment</button>
    <button onClick={()=>dec()}>decrement</button>
    <button onClick={()=>{rec()}}>reset</button>
 </div>
   }
   export default Counter