import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const RestaurantDetail = ( { yelp, user, setUpdateAfterBookmark } ) => {

    const [restaurantDetail, setRestaurantDetail] = useState([]);
    const [bookmarkDetail, setBookmarkDetail] = useState([]);
    const [errors, setErrors] = useState([]);
    const [updated, setUpdated] = useState(false);

    const params = useParams();


      useEffect(() => {
        const searchApi = async () => {
          const response = await yelp.get(`/${params.id}`, {
          });
          
          setRestaurantDetail(response.data)
          
      };
     
      searchApi()
    
      }, [])



 const locationAddress = restaurantDetail?.location?.display_address


const locationMap = locationAddress?.map((address) => {
  return (<p key={address}>{address}</p>)
})



const handleBookmark = (e) => {

  const restaurantData = {
    restaurant_name: restaurantDetail.name,
    user_id: user.id,
    restaurant_image: restaurantDetail.image_url,
    yelp_url: restaurantDetail.url,
  }

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
      setUpdated(updated => !updated)
      // history.push("/myBookmarks")
    });
  } else {
    res.json().then((err) => setErrors(err.errors))
  }
})
}

const formErrorMsg = errors?.map((err) => (
  <p key={err}>{err}</p>
  ))
  const editMsgClassName = updated ? '' : 'hidden';
  return (
    <div className= "restaurant-detail">
      <h2>{restaurantDetail?.name}</h2>
      <img src={restaurantDetail?.image_url} alt={restaurantDetail?.name}/>
      <ul>Yelp Rating: {restaurantDetail?.rating}</ul>
      <ul>Price Range: {restaurantDetail?.price}</ul>
      <ul>Address: {locationMap}</ul>
      <a href={restaurantDetail?.url} target="_blank" rel="noreferrer">
        <button className="btn btn-danger">Yelp Page</button>
      </a>
      <br />
      <br />
      
      <br />
      <button onClick={handleBookmark} className="btn btn-primary">Bookmark for Later</button>
      <ul>{formErrorMsg}</ul>
      <div id="edit-complete-msg" className={editMsgClassName}>
                <h3>Bookmarked!</h3>
                <Link to="/myBookmarks">
                  <button className="btn btn-primary">View My Bookmarks
                  </button>
                </Link>
        </div>
    </div>

  )
}

export default RestaurantDetail