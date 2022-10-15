import mongoose from "mongoose";


const RoomSchema = mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
        
    },
    maxPeople:{
        type: Number,
        required: true,
       
    },
    desc:{
        type: String,
        required: true,
    },
    roomNumber:[{ number: Number , unavailabledates: {type: [String]}}],
},{timestamps: true});

export default mongoose.model("Room", RoomSchema);