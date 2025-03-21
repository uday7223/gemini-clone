import { createContext, useState } from "react";
import run from "../config/gemini";


export const Context = createContext();

const ContextProvider = (props) =>{

  const[input, SetInput] = useState("");
  const[recentPrompt, SetRecentPrompt] = useState([]);
  const[previousPrompts, SetPreviousPrompts] = useState([]);
  const [showResult, SetShowResult] = useState(false);
  const [loading, SetLoading] = useState(false);
  const [resultData, SetResultData] = useState(false);




    const onSent = async (prompt) =>{
        SetResultData("");
        SetLoading(true);
        SetShowResult(true);
        SetRecentPrompt(input);
       const response = await run(input);
       SetResultData(response);
       SetLoading(false);
       SetInput("")
    }

    // onSent("what is react js ?")

    const contextValue = {
        previousPrompts,
        SetPreviousPrompts,
        showResult,
        SetShowResult,
        onSent,
        loading, 
        SetLoading,
        resultData, 
        SetResultData, 
        input, 
        SetInput, 
        recentPrompt, 
        SetRecentPrompt
    }

    return(
        <>
        
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
        </>
    )
}

export default ContextProvider