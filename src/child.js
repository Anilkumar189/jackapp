import React, { useContext } from "react"
import Grandchild from "./Grandchild"
import { Mycontext } from "./My context"
function Child(props){
   var f= useContext(Mycontext);
   console.log(f)
    function abc(){
        alert("hi darling")
    }
    return (
        <div className="border border-2 border-info m-2 p-2">
            <h1>child {props.x}.{f}</h1>
            <button onClick={()=>{abc()}} class="btn btn-danger">call abc</button>
            <button class="btn btn-success"onClick={()=>{props.y()}}>call xyz</button>
            <Grandchild></Grandchild>
        </div>
    )
}
export default Child