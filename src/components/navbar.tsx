import React from 'react'
import './styles/navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLanguage } from '@fortawesome/free-solid-svg-icons'

function navbar(): React.ReactElement {
  return (
    <div className='navbar'>
        <div className='navbar-wrapper'>
            <div className='logo'>
                <img src="images/just_exercise_new_logo.JPG" alt="JustExercise Logo"/>
            </div>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Help</li>
                    <li>Language <FontAwesomeIcon icon={faLanguage} size='xl'/></li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default navbar