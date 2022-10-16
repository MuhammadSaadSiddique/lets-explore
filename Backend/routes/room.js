import express from 'express';
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom, updateRoomAvailability } from '../controller/room.js';
import { verifyAdmin } from '../utilies/verifyToken.js';

const router = express.Router();
//CREATE
router.post("/:hotalid", createRoom);
router.put("/availability/:id", updateRoomAvailability);
//UPDATE
router.put("/:id", updateRoom);
//DELETE
router.delete("/:id/:hotalid", deleteRoom);
//GET
router.get("/:id" ,getRoom);
//GET ALL
router.get("/" , getRooms);


export default router;