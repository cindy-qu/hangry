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
          <ul className="suggestions">
            {suggestions.map((suggestion, index) => {
              return (
                <li
                  className={index === suggestionIndex ? "active" : ""}
                  key={index}
                  onClick={handleClicker}
                >
                  {suggestion}
                </li>
              );
            })}
          </ul>
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
                limit: 1,
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
        e.preventDefault()
        const restaurantArray = await fetchRestaurant()

        // console.log(updateRestaurant)
        // console.log(restaurantArray)
        history.push(`/restaurants/${restaurantArray[0]?.id}`)
    }
//   const currentLocation = {lat, long}
//   const nycLocation = {lat: 40.730610, long:-73.935242}
//   const laLocation = [34.052235, -118.243683]
//   const sfLocation = [37.773972, -122.431297]

// console.log(location)

  return (

    <div className="search-container">
        <form >

            {/* <select id="select_location" value={location} onChange={handleLocation} > 
                <option value="hi">Your Current Location</option>
                <option value={[40.730610, -73.935242]}>NYC</option>
                <option value="la">LA</option>
                <option value="sf">SF</option>
            </select> */}

            {/* <select id="select_category" value={category} onChange={handleCategory} > 
                <option value="italian">Italian</option>
                <option value="chinese">Chinese</option>
                <option value="mexican">Mexican</option>
                <option value="brunch">Brunch</option>
            </select> */}

            <select id="select_price"  value={price} onChange={handlePrice}> 
                <option value="1">$</option>
                <option value="2">$$</option>
                <option value="3">$$$</option>
                <option value="4">$$$$</option>

            </select>

            <input
                type="text"
                placeholder="What are you craving?"
                value={value}
                onChange={handleChange} 
                onKeyDown={handleKeyDown}
            />
            {suggestionsActive && <Suggestions />}

            <button className='submit-btn' onClick={handleClick}>Search</button>


        </form>

    </div>
  )
}

export default Search