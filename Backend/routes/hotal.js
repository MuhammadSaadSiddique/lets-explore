import express from 'express';
import { createHotel, updateHotel,deleteHotel,getHotel,getHotels, countBYCity, countBYType, getHotelRooms } from '../controller/hotel.js';
import { verifyAdmin } from '../utilies/verifyToken.js';

const router = express.Router();
//CREATE
router.post("/",createHotel);
//UPDATE
router.put("/:id" , updateHotel);
//DELETE
router.delete("/:id" , deleteHotel);
//GET
router.get("/find/:id" ,getHotel);
//GET ALL
router.get("/" , getHotels);
router.get("/countBYCity" , countBYCity);
router.get("/countBYType" , countBYType);
router.get("/room/:id", getHotelRooms);
export default router;