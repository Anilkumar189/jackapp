// import logo from './logo.svg';
 import { useState } from 'react';
import './App.css';
import Parent from './parent';
 import Counter from './counter';
import { Mycontext } from './My context';

function App() {
  var [institute,setInstitute]=useState("EDUPOLY")
  return ( 
     <Mycontext.Provider>
      <div className="border border-2 m-2 p-2 border-success">
        
          <h1>App:{institute}</h1>
           <Counter></Counter>  
          <Parent></Parent>
     </div>
     </Mycontext.Provider>
    
     );
    }

export default App;
