import React, { useState } from 'react'
import Child from './child'
import Grandchild from './Grandchild'
function Parent(){
    function xyz(){
        alert("this is parent")
    }
  var [fn,setFn]=useState("Anil kumar ");
    return ( 
        <div className='border border-2 border-danger m-2 p-2'>
            <h1>Parent:{fn}</h1>
            <button onClick={()=>{xyz()}}  class="btn btn-success">this xyz</button>
          <Child x={fn} y={xyz}></Child>
          
        </div>
    )
}
export default Parent