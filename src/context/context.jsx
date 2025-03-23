import { createContext, useState } from "react";
import run from "../config/gemini";



const ContextProvider = (props) =>{

  const[input, SetInput] = useState("");
  const[recentPrompt, SetRecentPrompt] = useState([]);
  const[previousPrompts, SetPreviousPrompts] = useState([]);
  const [showResult, SetShowResult] = useState(false);
  const [loading, SetLoading] = useState(false);
  const [resultData, SetResultData] = useState(false);

  const delayPara = (index, nextWord) => {
    setTimeout(() => {
        SetResultData((prev)=> prev+nextWord)
    },75*index)
  };


    const onSent = async (prompt) =>{
        SetResultData("");                       
        SetLoading(true);
        SetShowResult(true);
        SetRecentPrompt(input);
        SetPreviousPrompts((prev) => [...prev, input]);
       const response = await run(input);
       const newResponse = response.replace(/\*\*(.*?)\*\*/g, '<b>$1</b><br>');

       let newResponse2 = newResponse.split("*").join("<br>");
       let newResponseArray = newResponse2.split(" ");
       for (let i=0; i<newResponseArray.length; i++) {
         const nextWord = newResponseArray[i];
         delayPara(i, nextWord+" ");
       }
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

export const Context = createContext();
