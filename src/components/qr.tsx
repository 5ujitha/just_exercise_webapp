import React from 'react'
import './styles/qr.css'
import { useLocation, useNavigate } from "react-router-dom";

function Qr(): React.ReactElement {

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className='qr'>
        <div className='qr-wrapper'>
            <div className='qr-exercise'>
                <p>Selection:<span style={{color: '#1D6CB5'}}
                > {location.state.name}</span><span style={{color: location.state.mode==="Single-Player" ? 'rgb(235, 114, 114)' : 'rgb(235, 184, 88)'}}
                > {location.state.mode}</span><span style={{color: location.state.level==="Easy" ? 'rgb(55, 170, 40)' : location.state.level==="Medium" ? 'rgb(235, 184, 88)' : 'rgb(221, 98, 67)'}}
                > {location.state.level}</span>
                </p>
            </div>
            <div className='qr-code'>
                <img src="images/qr-code.jpg" alt="Qr Code"/>
            </div>
            <div className='qr-pin'>
                <p>PIN: 123 456</p>
            </div>
            <div className='qr-text'>
                <p>Scan the QR code above to begin</p>
            </div>
            <div className='qr-button'>
                <button onClick={()=>navigate("/select")}>Back</button>
            </div>
        </div>
    </div>
  )
}

export default Qr