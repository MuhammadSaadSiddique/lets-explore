import Hotal from "../models/Hotal.js";
import Room from "../models/Room.js";
import { createError } from "../utilies/error.js";

export const createRoom = async(req,res,next)=>{
    const hotalid = req.params.hotalid;
    const newRoom = new Room(req.body);

    try {
        const savedRoom = await newRoom.save();
         try {
            await Hotal.findByIdAndUpdate(hotalid , { $push: { rooms: savedRoom._id}})
         } catch (err) {
            next(err)
         }
         res.status(200).json(savedRoom);
    } catch (err) {
        next(err)
        
    }
}
export const updateRoom = async(req,next) =>{
    try {
        const updatedRoom = await Room.findByIdAndUpdate(req.params.id, { $set: req.body }, {new: true});
        res.status(200).json(updatedRoom);
    } catch (err) {
        next(err);
     }
};
export const updateRoomAvailability = async (req, res, next) => {
    try {
      await Room.updateOne(
        { "roomNumbers._id": req.params.id },
        {
          $push: {
            "roomNumbers.$.unavailableDates": req.body.dates
          },
        }
      );
      res.status(200).json("Room status has been updated.");
    } catch (err) {
      next(err);
    }
  };
export const deleteRoom = async(req, res,next) =>{
    const hotalid = req.params.hotalid;
    try {
        await Room.findByIdAndRemove(req.params.id);
        try {
            await Hotal.findByIdAndUpdate(hotalid , { $pull: { rooms: req.params.id }})
         } catch (err) {
            next(err)}
          res.status(200).json('Room has been deleted');
      }catch (err) {
        next(err);
     }
}
export const getRoom = async(req, res,next) =>{
    try {
        const room = await Room.findById(req.params.id);
        res.status(200).json(room);
    }catch (err) {
        next(err);
     }
}
export const getRooms=async(req, res,next) =>{
    try {
        const rooms = await Room.find();
        res.status(200).json(rooms);
    }catch (err) {
        next(err);
     }
}