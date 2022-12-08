import React from 'react'

const About = () => {
  return (
    <div className="about">
      <div className="card" id="about-details">
      <h1>About</h1>
      <p>
        Welcome to Hangry! Can't decide where to eat? Let Hangry pick a restaurant for you! Create an account or log in upon opening the app. Search by price range and category or choose "Feeling Adventurous" and Hangry will choose a restaurant based only on your location. Bookmark any restaurants that interest you. View all your bookmarks and add notes or create a google calendar event!
      </p> 
      <h2>Application Coding Details</h2>
      <p>
        This is a fullstack application that utilizes elements of React (Javascript, CSS, HTML, JSX) and Ruby on Rails to create a cohesive front and back end experience.
      </p>
      <h3>Resources</h3>
      <p><a href="https://www.freepik.com/author/pch-vector">Images by pch.vector</a> on Freepik</p>
      <p><a href="https://docs.developer.yelp.com/docs/getting-started">Yelp Fusion API</a></p>

      </div>
    </div>
    
  )
}

export default About