const express = require('express')
const axios = require('axios');
const app = express();

getCountryData = async (country) => {
    const data = await axios.get(`https://restcountries.com/v3.1/name/${country}`)
    return data;
}

app.get('/:country', async (req, res) => {
    const country = req.params.country
    const data = await getCountryData(country)
    res.send(data.data)
})

app.listen(3000||process.env.PORT, ()=> console.log('OK'))