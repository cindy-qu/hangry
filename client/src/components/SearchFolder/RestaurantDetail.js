import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'

const RestaurantDetail = ( { yelp, user } ) => {

    const [restaurantDetail, setRestaurantDetail] = useState([]);
    const [bookmarkDetail, setBookmarkDetail] = useState([]);
    const [errors, setErrors] = useState([]);
    const [createPersonalNote, setCreatePersonalNote] = useState("Tips, tricks, things to remember")

    const params = useParams();
    const history = useHistory();

      useEffect(() => {
        const searchApi = async () => {
          const response = await yelp.get(`/${params.id}`, {
          });
          
          setRestaurantDetail(response.data)
          
      };
     
      searchApi()
    
      }, [])



 const locationAddress = restaurantDetail?.location?.display_address
// console.log(locationAddress)

const locationMap = locationAddress?.map((address) => {
  return (<p key={address}>{address}</p>)
})



const handleBookmark = (e) => {
  // const formData = {
  //   personal_note: createPersonalNote,
  //   user_id: user.id,
  // }
  const restaurantData = {
    restaurant_name: restaurantDetail.name,
    user_id: user.id,
  }

//   fetch(`/bookmarks`, {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//     },
//     body: JSON.stringify(formData)
// })
fetch(`/restaurants`, {
  method: "POST",
  headers: {
      "Content-Type": "application/json",
  },
  body: JSON.stringify(restaurantData)
})
  

.then((res) => {
  if (res.ok) {
    res.json().then((userData) => {
      setBookmarkDetail(userData)
      history.push("/myBookmarks")
    });
  } else {
    res.json().then((err) => setErrors(err.errors))
  }
})
}

const formErrorMsg = errors?.map((err) => (
  <p key={err}>{err}</p>
  ))
// console.log(locationMap)
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
      <br />
      <br />
      <ul>Your Notes</ul>
      <textarea
      value={createPersonalNote}
      onChange={(e)=>{ setCreatePersonalNote(e.target.value) }}
       />

      <br />
      <br />
      <button onClick={handleBookmark}>Bookmark for Later</button>
      <ul>{formErrorMsg}</ul>
    </div>

  )
}
// t.string "restaurant_name"
// t.string "restaurant_image"
// t.integer "yelp_rating"
// t.string "yelp_url"
// t.string "price_range"
export default RestaurantDetail