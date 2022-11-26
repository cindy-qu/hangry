import React from 'react'
import Search from '../components/SearchFolder/Search'
const Home = ( {yelp, updateRestaurant, setUpdateRestaurant} ) => {
  return (
    <div className='home'>
        <Search yelp={yelp} updateRestaurant={updateRestaurant} setUpdateRestaurant={setUpdateRestaurant}/>
    </div>
  )
}

export default Home