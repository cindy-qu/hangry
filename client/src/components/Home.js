import React from 'react'
import Search from '../components/SearchFolder/Search'
const Home = ( {yelp} ) => {
  return (
    <div className='home'>
        <Search yelp={yelp}/>
    </div>
  )
}

export default Home