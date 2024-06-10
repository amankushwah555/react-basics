import React from 'react'
import './_video.scss'
import {AiFillEye} from 'react-icons/ai'
const Video = () => {
  return (
    <div className='video'>
      <div className='video_top'>
        <img src='https://i.ytimg.com/vi/36bB7A5Kw20/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLAOwiKF2UyskskrmOjRGGSSlZ_Q7A' alt=''/>
        <span>05:43</span>
      </div>
      <div className='video_title'>
        Create app in 5 minutes made by chintu
      </div>
      <div className='video_details'>
        <span>
<AiFillEye/> 5m Views •
        </span>
        <span>5 days ago</span>
      </div>
      <div className='video_channel'>
        <img src="https://i.pinimg.com/originals/7d/21/41/7d214131ce5e14801885169651173281.jpg" alt=""/>
        <p>Rainbow Hat Jr</p>
      </div>
    </div>
  )
}

export default Video