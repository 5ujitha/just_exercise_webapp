import React from 'react'
import './styles/difficulty.css'
import { useLocation, useNavigate } from "react-router-dom";

function Difficulty(): React.ReactElement {

  const navigate = useNavigate();
  const location = useLocation();
  const exerciseName = location.state.name;
  const mode = location.state.mode;

  return (
    <div className='difficulty'>
        <div className='difficulty-wrapper'>
            <div className='difficulty-title'>
                <p>Selection:<span style={{color: '#1D6CB5'}}> {location.state.name} </span><span style={{color: location.state.mode==="Single-Player" ? 'rgb(227, 169, 202)' : 'rgb(214, 123, 250)'}}
                >{location.state.mode}</span></p>
            </div>
            <div className='difficulty-select'>
                <div className='difficulty-easy'>
                    <div className='difficulty-easy-img' onClick={()=>navigate("/qr", {state:{name: exerciseName, mode: mode, level: "Easy"}})}>
                        <img src="images/easy.png" alt="Single Player"/>
                    </div>
                    <p>Easy</p>                        
                </div>
                <div className='difficulty-medium'>
                    <div className='difficulty-medium-img' onClick={()=>navigate("/qr", {state:{name: exerciseName, mode: mode, level: "Medium"}})}>
                        <img src="images/medium.png" alt="Multi PLayer"/>
                    </div>
                    <p>Medium</p>                        
                </div>
                <div className='difficulty-hard'>
                    <div className='difficulty-hard-img' onClick={()=>navigate("/qr", {state:{name: exerciseName, mode: mode, level: "Challenging"}})}>
                        <img src="images/hard.png" alt="Multi PLayer"/>
                    </div>
                    <p>Challenging</p>                        
                </div>
            </div>
            <div className='difficulty-text'>
                <p>Select difficulty level</p>
            </div>
            <div className='difficulty-button'>
                <button onClick={()=>navigate("/select")}>Back</button>
            </div>
        </div>
    </div>
  )
}

export default Difficulty