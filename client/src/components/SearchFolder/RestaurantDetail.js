import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const RestaurantDetail = ( { yelp } ) => {
    const [restaurantDetail, setRestaurantDetail] = useState(null);
    const params = useParams();

      useEffect(() => {
        const searchApi = async () => {
          const response = await yelp.get(`/${params.id}`, {
          });
          
          setRestaurantDetail(response.data)
        
console.log(response.data)
          
      };
     
      searchApi()
    
      }, [])

 const locationAddress = restaurantDetail?.location?.display_address
console.log(locationAddress)

const locationMap = locationAddress?.map((address) => {
  return (<p>{address}</p>)
})

console.log(locationMap)
  return (
    <div className= "restaurant-detail">
      <h2>{restaurantDetail?.name}</h2>
      <img src={restaurantDetail?.image_url} alt={restaurantDetail?.name}/>
      <ul>Yelp Rating: {restaurantDetail?.rating}</ul>
      <ul>Price Range: {restaurantDetail?.price}</ul>
      <ul>Address: {locationMap}</ul>
      <a href={restaurantDetail?.url} target="_blank" rel="noreferrer">
        <button>Yelp Page</button>
      </a>
    </div>

  )
}
// t.string "restaurant_name"
// t.string "restaurant_image"
// t.integer "yelp_rating"
// t.string "yelp_url"
// t.string "price_range"
export default RestaurantDetail