import React, { useContext, useState } from "react";
import assets from "../../assets/assets";
import "./sidebar.scss";
import { Context } from "../../context/context";
const Sidebar = () => {
  const [extended, SetExtended] = useState(false);
  const { onSent, previousPrompts, SetRecentPrompt, SetResultData,newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    SetRecentPrompt(prompt);
    await onSent(prompt, true);
  };

  return (
    <>
      <div className="sidebar">
        <div className="top-header">
          <img
            className="menu mt-3 ms-4"
            src={assets.menu_icon}
            alt=""
            onClick={() => SetExtended(!extended)}
          />
          <div className="new-chat mt-5 mx-4 px-3"
          onClick={newChat}>
            <img src={assets.plus_icon} alt="" />
            {extended ? <p className="ms-2">New Chat</p> : null}
          </div>

          {extended ? (
            <div className="recent">
              {previousPrompts.length!==0 ?  <p className="recent-title">Recent</p>
 : null}

              {/* <p>What is React JS ?</p> */}

              <div className="recent-list">
              {previousPrompts.map((prompt, index) => {
                return (
                  <div
                  key={index}
                    onClick={() => loadPrompt(prompt)}
                    className="recent-entry"
                  >
                    <img src={assets.message_icon} alt="" />
                    <p>{prompt.slice(0, 20)}...</p>
                  </div>
                );
              })}
              </div>
            </div>
          ) : null}
        </div>

        <div className="bottom">
          <div className="bottom-item">
            <img src={assets.question_icon} alt="" />
            {extended ? <p>Help</p> : null}
          </div>
          <div className="bottom-item">
            <img src={assets.history_icon} alt="" />
            {extended ? <p>Activity</p> : null}
          </div>
          <div className="bottom-item">
            <img src={assets.setting_icon} alt="" />
            {extended ? <p>Settings</p> : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
