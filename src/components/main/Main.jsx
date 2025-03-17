import React from 'react'
import "./main.scss"
import assets from '../../assets/assets'


const Main = () => {
  return (
   <>
        <div className="main">
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt="" />
            </div>

            <div className="main-con">
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
                        <p> If you could have dinner with any historical figure, who would it be?</p>
                        <img src={assets.bulb_icon} alt="" />
                    </div>
                    <div className="card-con">
                        <p>What’s one invention you think the world desperately needs?</p>
                        <img src={assets.message_icon} alt="" />
                    </div>
                    <div className="card-con">
                        <p>If time travel were possible, would you visit the past or the future?</p>
                        <img src={assets.code_icon} alt="" />
                    </div>
                </div>

                <div className="main-bottom">
                    <div className="search-box">
                        <input type="text" placeholder='Enter a propmt here' />

                        <div>
                            <img src={assets.gallery_icon} alt="" /><img src={assets.mic_icon} alt="" /><img src={assets.send_icon} alt="" />
                        </div>
                        <p className='bottom-info'>
                            Gemini may display innacurate information, so please check before using it. Your information is safe with us 
                        </p>
                    </div>
                </div>
            </div>
        </div>
   
   </>
  )

}

export default Main