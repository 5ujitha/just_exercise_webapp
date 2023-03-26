import React from 'react'
import './styles/multi.css'
import { useLocation, useNavigate } from "react-router-dom";

function Multi(): React.ReactElement {

  const navigate = useNavigate();
  const location = useLocation();
  const exerciseName = location.state.name;

  return (
    <div className='multi'>
        <div className='multi-wrapper'>
            <div className='multi-title'>
                <p>Exercise Selected: <span>{exerciseName}</span></p>
            </div>
            <div className='multi-select'>
                <div className='multi-singleplayer'>
                    <div className='multi-singleplayer-img' onClick={()=>navigate("/level", {state:{name: exerciseName, mode: "Single-Player"}})}>
                        <img src="images/single-player.png" alt="Single Player"/>
                    </div>
                    <p>Single Player</p>                        
                </div>
                <div className='multi-multiplayer'>
                    <div className='multi-multiplayer-img' onClick={()=>navigate("/level", {state:{name: exerciseName, mode: "Multi-Player"}})}>
                        <img src="images/multi-player.png" alt="Multi PLayer"/>
                    </div>
                    <p>Multiplayer</p>                        
                </div>
            </div>
            <div className='multi-text'>
                <p>Select Single or Multi Player</p>
            </div>
            <div className='multi-button'>
                <button onClick={()=>navigate("/select")}>Back</button>
            </div>
        </div>
    </div>
  )
}

export default Multi