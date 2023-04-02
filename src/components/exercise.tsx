import React from 'react'
import './styles/exercise.css'
import { useLocation, useNavigate } from "react-router-dom";

function Exercise() {

  const navigate = useNavigate();
  const mode = "Easy";
  const player = "Single-Player"

  return (
    <div className='exercise'>
        <div className='exercise-wrapper'>
            <div className='exercise-selection'>
                <p>Selection:<span style={{color: '#1D6CB5'}}
                > BALANCE</span><span style={{color: player==="Single-Player" ? 'rgb(235, 114, 114)' : 'rgb(235, 184, 88)'}}
                > Single-Player</span><span style={{color: mode==="Easy" ? 'rgb(55, 170, 40)' : mode==="Medium" ? 'rgb(235, 184, 88)' : 'rgb(221, 98, 67)'}}
                > Easy</span>
                </p>
            </div>
            <div className='exercise-video'>
                <img src="images/workout_video.jpg" alt="Workout Video"/>
            </div>
            <div className='exercise-button'>
                <button onClick={()=>navigate("/")}>Home</button>
            </div>
        </div>
    </div>
  )
}

export default Exercise