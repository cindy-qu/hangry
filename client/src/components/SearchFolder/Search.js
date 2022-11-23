import React, { useState } from 'react'
// import { Link } from 'react-router-dom'


const Search = ( { yelp }) => {
    // search state
    const [price, setPrice] = useState("1")
    const [category, setCategory] = useState("italian")
    const [location, setLocation] = useState("")
    const [restaurant, setRestaurant] = useState([])

    // handle get values from search inputs
    const handlePrice = (e) => {
        setPrice(e.target.value)
    }

    const handleCategory = (e) => {
        setCategory(e.target.value)
    }

    const handleLocation = (e) => {
        setLocation(e.target.value)
    }

    // fetch API Request
    const handleSearchSubmit = (e) => {
        e.preventDefault()

        const searchApi = async () => {
            const response = await yelp.get('/search', {
                params: {
                    limit: 1,
                    location: 'NYC',
                    term: 'restaurant',
                    categories: category,
                    price: price
                },
            });
            setRestaurant(response.data.businesses);
            
        };
       
        searchApi()
    }


// function generateRandomPrice(min = 1, max = 5) {
//     return (Math.floor(Math.random() * (max - min)) + min).toString()
// }
// console.log(restaurant)
  return (
    <div className="search-container">

        <form onSubmit={handleSearchSubmit}>

            <select id="select_location" value={location} onChange={handleLocation} > 
                <option value="italian">NYC</option>
                <option value="chi nese">LA</option>
                <option value="mexican">SF</option>
            </select>

            <select id="select_category" value={category} onChange={handleCategory} > 
                <option value="italian">Italian</option>
                <option value="chinese">Chinese</option>
                <option value="mexican">Mexican</option>
            </select>

            <select id="select_price"  value={price} onChange={handlePrice}> 
                <option value="1">$</option>
                <option value="2">$$</option>
                <option value="3">$$$</option>
                <option value="4">$$$$</option>
                {/* <option value={generateRandomPrice()}>Feeling lucky</option> */}
            </select>
            {/* <Link to={`/restaurants/${restaurant[0]?.id}`}> */}
            <button className='submit-btn' type="submit">Search</button>
            {/* </Link> */}

        </form>
    </div>
  )
}

export default Search