import express from 'express';
import { FetchRes, FetchAirlines } from '../controller/api.js';
import { verifyAdmin } from '../utilies/verifyToken.js';

const router = express.Router();
//CREATE
router.get("airports/:keyword/:page/:subType", FetchRes);
router.get("FetchAirlines",FetchAirlines);
// http://localhost:1338/api/airports/?keyword=a&page=10&subType=CITY


export default router;