// const axios = require('axios');
// const API_KEY = process.env.MAP_TOKEN
// async function getcordinates(address){
//     const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address},+CA&key=${API_KEY}`);
//     let data =  await response.data;
//     if(!data || data==='ZERO_RESULTS')
//     {
//         throw error;
//     }
//     const coordinates = await data.results[0].geometry.location;
//     return coordinates;   
// }

// module.exports = getcordinates;

const axios = require('axios');
const API_KEY = process.env.MAP_TOKEN;

async function getcordinates(address) {
    try {
        const response = await axios.get(//maps.googleapis.com/maps/api/geocode/json, {
        {
                address: address,
                key: API_KEY
            }
        );

        const data = response.data;

        if (!data || data.status !== 'OK' || data.results.length === 0) {
            throw new Error('Location not found');
        }

        const coordinates = data.results[0].geometry.location;
        return coordinates;
    } catch (err) {
        console.error("Error fetching coordinates:", err.message);
        return null;
    }
}


module.exports = getcordinates;