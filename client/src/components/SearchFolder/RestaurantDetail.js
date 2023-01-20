import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'


const RestaurantDetail = ( { yelp, user, setUpdateAfterBookmark } ) => {

    const [restaurantDetail, setRestaurantDetail] = useState([]);
    const [bookmarkDetail, setBookmarkDetail] = useState([]);
    const [errors, setErrors] = useState([]);
    const [updated, setUpdated] = useState(false);

    const params = useParams();

// console.log(params.id)


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
  return (<p className="location-detail" key={address}>{address}</p>)
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
// console.log(small_25)
var newnumber = parseInt(restaurantDetail?.rating?.toString().replace('.', ''))
// console.log(restaurantDetail?.rating)
// console.log(newnumber)


const formErrorMsg = errors?.map((err) => (
  <p key={err}>{err}</p>
  ))
  const editMsgClassName = updated ? '' : 'hidden';


  return (
    <div className= "restaurant-detail">
      <div className="card" id="restdetail">
      <h2>{restaurantDetail?.name}</h2>
      <img id="restaurant-image" src={restaurantDetail?.image_url} alt={restaurantDetail?.name}/>
      <div className="yelp-detail">
      
      <li  >Yelp Rating: <img id="yelp-rating" src={`/images/small_${newnumber}.png`} alt={restaurantDetail?.rating}></img></li>

      
      
      <li>Price Range: {restaurantDetail?.price}</li>
      <li>Address: {locationMap}</li>
      </div>
      <a href={restaurantDetail?.url} target="_blank" rel="noreferrer">
        <button id="buttonyelp" className="btn btn-danger">Yelp Page</button>
      </a>
 

      <button onClick={handleBookmark} className="btn btn-primary" id = "buttonbookmark" >Bookmark for Later</button>
      <ul>{formErrorMsg}</ul>
      <div id="edit-complete-msg" className={editMsgClassName}>
                <h3>Bookmarked!</h3>
                <Link to="/myBookmarks">
                  <button className="btn btn-primary">View My Bookmarks
                  </button>
                </Link>
        </div>
        </div>
    </div>

  )
}

export default RestaurantDetail