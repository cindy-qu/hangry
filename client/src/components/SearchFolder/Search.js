import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { autoCompleteData } from "./data.js";

const Search = ( { yelp, lat, long, updateRestaurant, setUpdateRestaurant }) => {
  
    // search state
    
    const [price, setPrice] = useState("1")
    // const [category, setCategory] = useState("italian")
    // const [location, setLocation] = useState('')


    const history = useHistory();

    // handle get values from dropdown inputs
    const handlePrice = (e) => {
        setPrice(e.target.value)
    }

    // const handleCategory = (e) => {
    //     setCategory(e.target.value)
    // }
//auto
   //autocomplete
   const [suggestions, setSuggestions] = useState([]);
   const [suggestionIndex, setSuggestionIndex] = useState(0);
   const [suggestionsActive, setSuggestionsActive] = useState(false);
   const [value, setValue] = useState("");

    const handleChange = (e) => {
        const query = e.target.value.toLowerCase();
        setValue(query);
        if (query.length > 1) {
          const filterSuggestions = autoCompleteData.filter(
            (suggestion) =>
              suggestion.toLowerCase().indexOf(query) > -1
          );
          setSuggestions(filterSuggestions);
          setSuggestionsActive(true);
        } else {
          setSuggestionsActive(false);
        }
      };
      const handleClicker = (e) => {
        setSuggestions([]);
        setValue(e.target.innerText);
        setSuggestionsActive(false);
      };
      const handleKeyDown = (e) => {
        // UP ARROW
        if (e.keyCode === 38) {
          if (suggestionIndex === 0) {
            return;
          }
          setSuggestionIndex(suggestionIndex - 1);
        }
        // DOWN ARROW
        else if (e.keyCode === 40) {
          if (suggestionIndex - 1 === suggestions.length) {
            return;
          }
          setSuggestionIndex(suggestionIndex + 1);
        }
        // ENTER
        else if (e.keyCode === 13) {
          setValue(suggestions[suggestionIndex]);
          setSuggestionIndex(0);
          setSuggestionsActive(false);
        }
      };
      const Suggestions = () => {
        return (
          <div className="suggestions">
            {suggestions.map((suggestion, index) => {
              return (
                <p
                  className={index === suggestionIndex ? "active" : ""}
                  key={index}
                  onClick={handleClicker}
                >
                  {suggestion}
                </p>
              );
            })}
          </div>
        );
      };
    
    //autocomplete
    // const [suggestions, setSuggestions] = useState([]);
    // const [suggestionIndex, setSuggestionIndex] = useState(0);
    // const [suggestionsActive, setSuggestionsActive] = useState(false);
    // const [value, setValue] = useState("");

    // const handleLocation = (e) => {
    //     setLocation(e.target.value)
    // }

    // const handleClick = (e) => {
    //     e.preventDefault()
    //     yelp.get(`/search`, {
    //         params: {
    //             limit: 1,
    //             location: location,
    //             term: 'restaurant',
    //             categories: category,
    //             price: price
    //         }
    //     })
    //     .then((restaurantData) => {
    //         setUpdateRestaurant(restaurantData.data.businesses)
    //     })

    //     console.log(updateRestaurant)
    // //    console.log(location, category, price)
    //     // history.push(`/restaurants/${updateRestaurant[0]?.id}`)
    // }

    async function fetchRestaurant(){
        const data = await yelp.get('/search', {
            params: {
                limit: 5,
                // latitude: 37.3308372,
                // longitude: -121.9083366,
                latitude: lat,
                longitude: long,
                // location: location,
                term: 'restaurant',
                categories: value,
                price: price                
            }
        })
        // setUpdateRestaurant(data.data.businesses)
        // history.push(`/restaurants/${updateRestaurant[0]?.id}`)
        return data.data.businesses
    } 

    useEffect(() => {
        fetchRestaurant()
        
    },[])

    const handleClick = async (e) => {
        e.preventDefault();
        const restaurantArray = await fetchRestaurant()

        function generateRandomRestaurant(min = 1, max = 5) {
            return (Math.floor(Math.random() * (max - min)) + min).toString()
        }

        if (restaurantArray.length > 0) {
          history.push(`/restaurants/${restaurantArray[generateRandomRestaurant()]?.id}`)
        } else {
          history.push(`/tryagain`)
        }
        // history.push(`/restaurants/${restaurantArray[generateRandomRestaurant()]?.id}`)

    }
//   const currentLocation = {lat, long}
//   const nycLocation = {lat: 40.730610, long:-73.935242}
//   const laLocation = [34.052235, -118.243683]
//   const sfLocation = [37.773972, -122.431297]

// console.log(location)

// Adventure

function generateRandomPrice(min = 1, max = 4) {
  return (Math.floor(Math.random() * (max - min)) + min).toString()
}
async function fetchAdventureRestaurant(){
  const data = await yelp.get('/search', {
      params: {
          limit: 10,
          // latitude: 37.3308372,
          // longitude: -121.9083366,
          latitude: lat,
          longitude: long,
          term: 'restaurant',
          // categories: value,
          price: generateRandomPrice()                
      }
  })

  return data.data.businesses
} 

const handleAdventureClick = async (e) => {
  e.preventDefault();
  const restaurantArray = await fetchAdventureRestaurant()

  function generateRandomRestaurant(min = 1, max = 10) {
    return (Math.floor(Math.random() * (max - min)) + min).toString()
}

history.push(`/restaurants/${restaurantArray[generateRandomRestaurant()]?.id}`)

}
  return (
    
    <div className="card-background">
         
    <div className="card" id="search-card">
    <div className="alert alert-info alert-dismissible fade show">
          <i className="fa-solid fa-circle-info"></i>
        <strong>Info!</strong> Please remember to temporarily enable <a target="_blank" rel="noopener noreferrer" href="https://cors-anywhere.herokuapp.com/corsdemo" className="alert-link">CORS Anywhere</a> when you first login!
        <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
    </div>
    <div className="search-container" data-backdrop="false">
      <br></br>
      <p>Get a restaurant based on price range and category!</p>
        <form className="search-bar">



            <select className="form-select" id="select_price"  value={price} onChange={handlePrice}> 
                <option value="1">$</option>
                <option value="2">$$</option>
                <option value="3">$$$</option>
                <option value="4">$$$$</option>

            </select>

            <input
                className="form-control" type="search" 
                autoComplete="off"
                id= "searchinput"
                placeholder="What are you craving?"
                value={value}
                onChange={handleChange} 
                onKeyDown={handleKeyDown}
            />
            {suggestionsActive && <Suggestions />}

            <button className='btn btn-primary' onClick={handleClick} id="search-button">Search</button>


        </form>
        <br></br>
        <p>Get a restaurant only based on your location!</p>
        <button className='btn btn-primary' onClick={handleAdventureClick} id="adventurous-button">Feeling Adventurous</button>
    </div>
    </div>
    </div>
  )
}

export default Search