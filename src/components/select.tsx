import React from 'react'
import './styles/select.css'
import { useNavigate } from "react-router-dom";

function Select(): React.ReactElement {
  
  const navigate = useNavigate();

  return (
    <div className='select'>
        <div className='select-wrapper'>
            <p className='select-exercise-title'>Select one of the exercises below to do:</p>
            <div className='select-top-exercise'>
                <div className='select-exercise'>
                    <div>
                        <div className='select-exercise-img' onClick={()=>navigate("/multi", {state:{name: "WARM UP"}})}>
                            <img src="images/warm-up.png" alt="Warm Up"/>
                        </div>
                        <p>Warm Up</p>                        
                    </div>
                </div>
                <div className='select-exercise'>
                    <div>
                        <div className='select-exercise-img' onClick={()=>navigate("/multi", {state:{name: "BALANCE"}})}>
                            <img src="images/balance.png" alt="Balance"/>
                        </div>
                        <p>Balance</p>                        
                    </div>
                </div>
                <div className='select-exercise'>
                    <div>
                        <div className='select-exercise-img' onClick={()=>navigate("/multi", {state:{name: "FLEXIBILITY"}})}> 
                            <img src="images/flexibility.png" alt="Flexibility"/>
                        </div>
                        <p>Flexibility</p>                        
                    </div>
                </div>
            </div>
            <div className='select-bottom-exercise'>
                <div>
                    <div className='select-exercise'>
                        <div>
                            <div className='select-exercise-img' onClick={()=>navigate("/multi", {state:{name: "STRENGTH"}})}>
                                <img src="images/strength.png" alt="Strength"/>
                            </div>
                            <p>Strength</p>                        
                        </div>
                    </div>
                </div>
                <div className='select-exercise'>
                    <div>
                        <div className='select-exercise-img' onClick={()=>navigate("/multi", {state:{name: "STRETCHING"}})}>
                            <img src="images/stretch.png" alt="Stretch"/>
                        </div>
                        <p>Stretching</p>                        
                    </div>
                </div>
                <div className='select-exercise'>
                    <div>
                        <div className='select-exercise-img' onClick={()=>navigate("/multi", {state:{name: "COOL DOWN"}})}>
                            <img src="images/cool-down.png" alt="Cool Down"/>
                        </div>
                        <p>Cool Down</p>                        
                    </div>
                </div>
            </div>
            <div className='select-buttons'>
                <div className='select-buttons-wrapper'>
                    <button onClick={()=>navigate("/")}>Back</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Select