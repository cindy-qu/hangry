import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'


const Search = ( { yelp, updateRestaurant, setUpdateRestaurant }) => {
    // search state
    const [price, setPrice] = useState("1")
    const [category, setCategory] = useState("italian")
    const [location, setLocation] = useState("nyc")
    const [restaurant, setRestaurant] = useState([])

    const history = useHistory();

    // handle get values from dropdown inputs
    const handlePrice = (e) => {
        setPrice(e.target.value)
    }

    const handleCategory = (e) => {
        setCategory(e.target.value)
    }

    const handleLocation = (e) => {
        setLocation(e.target.value)
    }

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
                location: location,
                term: 'restaurant',
                categories: category,
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
  

  return (

    <div className="search-container">
        <form >

            <select id="select_location" value={location} onChange={handleLocation} > 
                <option value="nyc">NYC</option>
                <option value="la">LA</option>
                <option value="sf">SF</option>
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

            </select>
            

            <button className='submit-btn' onClick={handleClick}>Search</button>


        </form>

    </div>
  )
}

export default Search