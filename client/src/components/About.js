import React from 'react'

const About = () => {
  return (
    <div className="about">
      <div className="card" id="about-details">
      <h1>About</h1>
      <p>
        Welcome to Hangry! Can't decide where to eat? Let Hangry pick a restaurant for you! Create an account or log in upon opening the app. Search by price range and category or choose "Feeling Adventurous" and Hangry will choose a restaurant based only on your location. Bookmark any restaurants that interest you. View all your bookmarks and add notes or create a Google calendar event!
      </p> 
      <h2>Application Coding Details</h2>
      <p>
        This is a fullstack application that utilizes elements of React (Javascript, CSS, HTML, JSX) and Ruby on Rails to create a cohesive front and back end experience. This application is for non-commercial uses only.
      </p>
      <h3>Resources</h3>
      <p><a href="https://www.freepik.com/author/pch-vector">Images by pch.vector</a> on Freepik</p>
      <p><a href="https://docs.developer.yelp.com/docs/getting-started">Yelp Fusion API</a></p>
      <p><a href="https://developers.google.com/calendar/api">Google Calendar API</a></p>
      <p><a href="https://www.w3schools.com/html/html5_geolocation.asp">HTML Geolocation API</a></p>
      <h4>Connect with Me on LinkedIn</h4>
      <p><a href="https://www.linkedin.com/in/cindy-qu/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin" id="linkedin"></i></a></p>
      </div>
    </div>
    
  )
}

export default About