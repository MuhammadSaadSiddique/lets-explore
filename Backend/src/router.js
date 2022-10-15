// src/router.js
const Amadeus = require("amadeus");
const router = require("express").Router();
const axios = require('axios').default;

// Getting env variables 
const { CLIENT_ID, CLIENT_SECRET } = require('./config');
const API = `api`;
// This is AMADEUS client for getting authToken that we need to make actual call to amadeus API 
const amadeus = new Amadeus({
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET
});

const authoriseData = async () =>{
    try{
      const resp = await axios.post("https://test.api.amadeus.com/v1/security/oauth2/token", 
        'grant_type=client_credentials&client_id='+amadeus.clientId+'&client_secret='+amadeus.clientSecret+'',
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
      );
    } 
    catch(e){
      console.log(e);
    };
  }
// authoriseData();

// Endpoint
router.get(`/${API}/airports`, async (req, res) => {
  const { page, subType, keyword } = req.query;
  // API call with params we requested from client app
  const response = await amadeus.client.get("/v1/reference-data/locations", {
    keyword,
    subType,
    "page[offset]": page * 10
  });
  // Sending response for client
  try {
    await res.json(JSON.parse(response.body));
  } catch (err) {
    await res.json(err);
  }
});

module.exports = router;