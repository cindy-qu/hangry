import axios from 'axios'
import YELP_KEY from './key'

// proxyURL to attain CORS approval:
const proxyURL = 'https://cors-anywhere.herokuapp.com/';
const baseURL = 'https://api.yelp.com/v3/businesses'

export default axios.create({
    baseURL: proxyURL + baseURL,
    //HTTP Header for authorization:
    headers: {
        Authorization: `Bearer ${YELP_KEY}`
    },
    // params: {
    //     limit: 1
    // }
})