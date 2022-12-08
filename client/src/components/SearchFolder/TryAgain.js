import React from 'react'
import { Link } from 'react-router-dom'
const TryAgain = () => {
  return (
    <div className="tryagain">
        <h1>
            Sorry! No restaurants were found matching your selected criteria. Please try adjusting the price range.
        </h1>
    <Link to="/">  
        <button className="btn btn-primary" id="try-again-button">Search Again</button>
    </Link>
    </div>
  )
}

export default TryAgain