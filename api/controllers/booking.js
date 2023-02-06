// import Hotel from "../models/Hotel.js";
// import Room from "../models/Room.js";
// import User from "../models/User.js";
import Booking from "../models/Booking.js";

export const createBooking = async (req, res, next) => {
    try {
        console.log("hi");
        const { user,hotel, room, roomsbooked, checkIn, checkOut } = req.body;
        console.log(user, hotel, room, roomsbooked, checkIn, checkOut);
        const booking = new Booking({ user, hotel, room, roomsbooked, checkIn, checkOut });
        const savedBooking = await booking.save();
        res.status(200).json(savedBooking);
    } catch (error) {
        res.json({ success: false, error: error.message });
    }
};

export const updateBooking = async (req, res, next) => {
    try {
        const updatedBooking = await Booking.findByIdAndUpdate(
          req.params.id,
          { $set: req.body },
          { new: true }
        );
        res.status(200).json(updatedBooking);
      } catch (err) {
        next(err);
      }
};

export const deleteBooking = async (req, res, next) => {
    try {
        await Booking.findByIdAndDelete(req.params.id);
        res.status(200).json("Booking has been deleted.");
      } catch (err) {
        next(err);
      }
};

export const getBooking = async (req, res, next) => {
    try {
        const booking = await Booking.findById(req.params.id);
        res.status(200).json(booking);
      } catch (err) {
        next(err);
      }
};

export const getBookings = async (req, res, next) => {

};