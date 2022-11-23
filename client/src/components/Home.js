import React from 'react'
import Search from '../components/SearchFolder/Search'
const Home = ( {yelp} ) => {
  return (
    <div className='home'>
        <h1>Welcome to Hangry</h1>
        <h2>Let Hangry pick your location<span id="spin"></span></h2>
        <Search yelp={yelp}/>
    </div>
  )
}

export default Home