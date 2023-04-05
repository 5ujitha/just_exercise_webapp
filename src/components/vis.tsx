import React from 'react'
import './styles/qr.css'


function Vid(): React.ReactElement {
  return (
    <div>
      <video src="video/myVideo.mp4" autoPlay controls style={{width: '100%', height: "50%"}}>
      Your browser does not support the video tag.
      </video>
    </div>
  );
}
export default Vid 
