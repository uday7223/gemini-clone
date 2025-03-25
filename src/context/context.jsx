import { createContext, useState } from "react";
import run from "../config/gemini";

const ContextProvider = (props) => {
  const [input, SetInput] = useState("");
  const [recentPrompt, SetRecentPrompt] = useState([]);
  const [previousPrompts, SetPreviousPrompts] = useState([]);
  const [showResult, SetShowResult] = useState(false);
  const [loading, SetLoading] = useState(false);
  const [resultData, SetResultData] = useState(false);

  const delayPara = (index, nextWord) => {
    setTimeout(() => {
      SetResultData((prev) => prev + nextWord);
    }, 75 * index);
  };

  const newChat = () => { 
    SetLoading(false);
    SetShowResult(false);
    SetResultData("");
  }

  const onSent = async (prompt, fromSidebar = false) => {
    SetResultData("");
    SetLoading(true);
    SetShowResult(true);
    let response;

    const newPrompt = prompt !== undefined ? prompt : input;

    // Only update previousPrompts if it's not coming from the sidebar
    if (!fromSidebar) {
      SetPreviousPrompts((prev) => [...prev, newPrompt]);
    }
    SetRecentPrompt(newPrompt);

    response = await run(newPrompt);

    var newResponse = response.replace(/\*\*(.*?)\*\*/g, "<b>$1</b><br>");
    let newResponse2 = newResponse.split("*").join("<br>");
    let newResponseArray = newResponse2.split(" ");

    for (let i = 0; i < newResponseArray.length; i++) {
      const nextWord = newResponseArray[i];
      delayPara(i, nextWord + " ");
    }

    SetLoading(false);
    SetInput("");
  };

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
    SetRecentPrompt,
    newChat
  };

  return (
    <>
      <Context.Provider value={contextValue}>{props.children}</Context.Provider>
    </>
  );
};

export default ContextProvider;

export const Context = createContext();
