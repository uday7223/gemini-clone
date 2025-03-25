import React, { useContext } from "react";
import "./main.scss";
import assets from "../../assets/assets";
import { Context } from "../../context/context";

const Main = () => {
  const {
    onSent,
    loading,
    resultData,
    input,
    SetInput,
    recentPrompt,
  } = useContext(Context);

  return (
    <>
      <div className="main">
        <div className="nav">
          <p>Gemini</p>
          <img src={assets.user_icon} alt="" />
        </div>

        <div className="main-con">
          {!resultData ? (
            <>
              <div className="greet">
                <p>
                  <span>Hello, Uday.</span>
                </p>
                <p>
                  <span>What do you want to learn today?</span>
                </p>
              </div>

              <div className="cards">
                <div className="card-con">
                  <p>Suggest a beautifull place to visit in japan </p>
                  <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card-con">
                  <p>
                    {" "}
                    If you could have dinner with any historical figure, who
                    would it be?
                  </p>
                  <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card-con">
                  <p>
                    What’s one invention you think the world desperately needs?
                  </p>
                  <img src={assets.message_icon} alt="" />
                </div>
                <div className="card-con">
                  <p>
                    If time travel were possible, would you visit the past or
                    the future?
                  </p>
                  <img src={assets.code_icon} alt="" />
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="result position-relative">

              <div className="result-title">
                    
                    <img className="user-icon" style={{width:"40px", borderRadius:"50px"}} src={assets.user_icon} alt="" />
                    <p className="mt-3 me-2">{recentPrompt}</p>
                </div>

                <div className="result-data">
                    <img src={assets.gemini_icon} alt=""  />
                    {loading ? 
                    <>
                    <div className="loader">
                        <hr />
                        <hr />
                        <hr />

                    </div> 
                    </>
                    : 
                    
                    <p dangerouslySetInnerHTML={{ __html: resultData }}></p>

                    }
                </div>
   
              </div>
            </>
          )}

          <div className="main-bottom">
            <div className="search-box">
              <input
                type="text"
                onChange={(e) => {
                  SetInput(e.target.value);
           
                }}
                onKeyDown={(e) => {e.key === "Enter" &&

                  onSent(input);
                  // SetRecentPrompt(input)
                }}
                value={input}
                placeholder="Enter a prompt here"
              />

              <div className="input-icons">
                <img src={assets.gallery_icon} alt="" />
                <img src={assets.mic_icon} alt="" />
                <img
                  src={assets.send_icon}
                  alt=""
                  onClick={(e) => {
                    onSent(input);
                  }}
                />
              </div>
            </div>
            <p className="bottom-info">
              Gemini may display innacurate information, so please check before
              using it. Your information is safe with us
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
