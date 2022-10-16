
import Hotal from '../models/Hotal.js';
import Room from '../models/Room.js';

export const createHotel = async(req, res,next) =>{
    const newHotal = new Hotal(req.body);
    try {
        const savedHotal = await newHotal.save();
        res.status(200).json(savedHotal);
    } catch (err) {
       next(err);
    }
}
export const updateHotel = async(req,next) =>{
    try {
        const updatedHotal = await Hotal.findByIdAndUpdate(req.params.id, { $set: req.body }, {new: true});
        res.status(200).json(updatedHotal);
    } catch (err) {
        next(err);
     }
}
export const deleteHotel = async(req, res,next) =>{
    try {
        await Hotal.findByIdAndRemove(req.params.id);
          res.status(200).json('Hotel has been deleted');
      }catch (err) {
        next(err);
     }
}
export const getHotel = async(req, res,next) =>{
    try {
        const hotal = await Hotal.findById(req.params.id);
        res.status(200).json(hotal);
    }catch (err) {
        next(err);
     }
}
export const getHotels =async(req, res,next) =>{
    const { max, min , ...others} = req.query;
    try {
        const hotals = await Hotal.find({...others , cheapestPrice: {$gt: min || 1  , $lt: max ||999},}).limit(req.query.limit);
        res.status(200).json(hotals);
    }catch (err) {
        next(err);
     }
}
export const countBYCity =async(req, res,next) =>{
    const cities = req.query.cities.split(",");
    try {
        const list = await Promise.all(cities.map(city=>{
            return Hotal.countDocuments({city:city})
        }))
        res.status(200).json(list);
    }catch (err) {
        next(err);
     }
}
export const countBYType =async(req, res,next) =>{
    
    try {
        const hotalCount =  await Hotal.countDocuments({type: "hotal"});
        const apartmentCount = await Hotal.countDocuments({type: "apartment"});
        const resortCount = await Hotal.countDocuments({type: "resort"});
        const villaCount = await Hotal.countDocuments({type: "villa"});
        const cabinCount = await Hotal.countDocuments({type: "cabin"}); 
        res.status(200).json([
            { type: "hotal", count: hotalCount},
            { type: "apartment", count: apartmentCount},
            { type: "resort", count: resortCount},
            { type: "villa", count: villaCount},
            { type: "cabin", count: cabinCount},
        ]
        );
    }catch (err) {
        next(err);
     }
}
export const getHotelRooms =async (req,res,next) =>{
    try {
        const hotal = await Hotal.findById(req.params.id);
        const list =  await Promise.all(hotal.rooms.map((room)=>{
            return Room.findById(room)
        }));
        res.status(200).json(list);
    } catch (err) {
       next(err)        
    }
}