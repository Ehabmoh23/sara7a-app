import { createContext, useState } from "react";


let CounterContext = createContext()
 
function CounterContextProvider(){
     const [counter,setCounter]=useState(0);
     return <CounterContext.Provider value={counter}></CounterContext.Provider>
}

export default CounterContextProvider;