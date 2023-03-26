import React from 'react'
import './styles/footer.css'

function footer(): React.ReactElement {
  return (
    <div className='footer'>
      <div className='footer-wrapper'>
        <div className="company">
          <p>&copy;JustExercise</p>
        </div>
        <div className="footer-information">
          <p>Terms of Use</p>
          <p>Privacy</p>
          <p>Version 1.0.1</p>
        </div>
      </div>
    </div>
  )
}

export default footer