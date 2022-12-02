import React from 'react'
import Search from '../components/SearchFolder/Search'
const Home = ( {yelp, updateRestaurant, setUpdateRestaurant, lat, long } ) => {
  return (
    
    <div className='home' >
        <Search 
        yelp={yelp} 
        updateRestaurant={updateRestaurant} 
        setUpdateRestaurant={setUpdateRestaurant}
        lat={lat}
        long={long}
        />
    </div>
  )
}

export default Home