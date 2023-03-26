import React from 'react'
import './styles/home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";

function Home(): React.ReactElement {

  const navigate = useNavigate();

  const handleClick:(e:React.MouseEvent<HTMLElement>) => void = (e)=>{
    navigate("/select")
  }

  return (
    <div className='homepage'>
      <div className='homepage-wrapper'>
        <div className='homepage-texts'>
          <div className='homepage-title'>
            <p>Fitness Power</p>
          </div>
          <div>
            <p>Click on the Start button below to start exercising</p>
          </div>
          <div className='homepage-buttons-wrapper'>
            <button onClick={handleClick}>Start <FontAwesomeIcon icon={faPlay} size='sm'/></button>
          </div>
        </div>
        <div className='homepage-image'>
          <img src="images/old_people_exercising.png"/>
        </div>
      </div>
    </div>
  )
}

export default Home