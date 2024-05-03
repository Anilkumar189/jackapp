import React from "react"
import Grandgrandchild from "./Grandgrandchild"
function Grandchild (){
 return (
    <div className="border border-2 border-danger m-2 p-2">
    <h1>grandchild</h1>
    <Grandgrandchild></Grandgrandchild>
    </div>
 )
}
export default Grandchild
