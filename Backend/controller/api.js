import Amadeus from "amadeus";
// const router = require("express").Router();
// Getting env variables 
// const { CLIENT_ID, CLIENT_SECRET } = require('./config');
// const API = `api`;
// This is AMADEUS client for getting authToken that we need to make actual call to amadeus API 

export const FetchRes = async (req, res, next) => {
    try {
        // const response = await amadeus.client.get("/v2/reference-data/urls/checkin-links?airlineCode=BA");
        // const { page, subType, keyword } = req.query;

        const page = req.params.page;
        const subType = req.params.subType;
        const keyword = req.params.keyword;
        // API call with params we requested from client app
        const amadeus = new Amadeus({
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET
        });

        const response = await amadeus.client.get("/v1/reference-data/locations", {
            keyword,
            subType,
            "page[offset]": page * 10
        });
        // Sending response for client

        await res.json(JSON.parse(response.body));// res.status(200).json(response.body);
    } catch (err) {
        await res.json(err);
        // next(err);
    }
}

export const FetchAirlines= async (req, res, next) => {
    try {
        
        const amadeus = new Amadeus({
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET
        });
        const response = await amadeus.client.get("/v2/reference-data/urls/checkin-links?airlineCode=BA");
        
        // Sending response for client

        await res.status(200).json(response.body);
    } catch (err) {
        await res.json(err);
        // next(err);
    }
}