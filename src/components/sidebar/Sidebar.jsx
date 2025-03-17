import React, { useState } from "react";
import assests from "../../assets/assets";
import assets from "../../assets/assets";
import './sidebar.scss'

const Sidebar = () => {
      const [extended, SetExtended] = useState(false)

  return (
    <>
      <div className="sidebar">
        <div className="top-header">
          <img className="menu" src={assests.menu_icon} alt="" onClick={() => SetExtended(!extended)} />
          <div className="new-chat">
            <img src={assets.plus_icon} alt="" />
             {extended ?  <p className="">New Chat</p> : null }
          </div>


          {extended ?
          
          <div className="recent">
          <p className="recent-title">Recent</p>
          <div className="recent-entry">
              <img src={assets.message_icon} alt="" />
              <p>What is React JS ?</p>
          </div>
        </div>

        : null
        }
        
        </div>

        
        <div className="bottom">     
            <div className="bottom-item">
                <img src={assets.question_icon} alt="" />
              {extended ?   <p>Help</p> : null}
            </div>
            <div className="bottom-item">
                <img src={assets.history_icon} alt="" />
                {extended ?   <p>Activity</p> : null}
            </div>
            <div className="bottom-item">
                <img src={assets.setting_icon} alt="" />
                {extended ?     <p>Settings</p> : null}

             
            </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
