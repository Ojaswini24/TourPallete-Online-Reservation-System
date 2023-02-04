import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
    user: {
       type: [String] 
    },
    hotel: {
        type: [String]
    },
    room: {
        type: [String]
    },
    roomsbooked:{
        type: [String]
    },
    checkIn: {
        type: Date
    },
    checkOut: {
        type: Date
    }
});

export default mongoose.model("Booking", BookingSchema)