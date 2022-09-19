import { createContext, useState } from "react";

 export const Context = createContext()

  export const AppProvider=(props)=>{
    const [state,setState]=useState("Albin")
    return (
        <Context.Provider value={state}>
{props.children}
        </Context.Provider>
    )
  }
