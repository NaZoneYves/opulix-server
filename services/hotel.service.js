const Hotel = require("../models/Hotel");

exports.getAllHotels = async () => {
  try {
    const hotels = Hotel.find().populate("rooms");
    return hotels;
  } catch (error) {
    throw new Error("Have no any hotels found");
  }
};

exports.getHotelById = async (id) => {
  try {
    const hotel = Hotel.findById(id);
    return hotel;
  } catch (error) {
    throw new Error("Hotel not found");
  }
};

exports.createHotel = async (data) => {
  const hotel = new Hotel(data);
  await hotel.save();
  return await hotel.populate("rooms");
};

exports.updateHotel = async (id, data) => {
  return await Hotel.findByIdAndUpdate(
    id,
    {
      $set: data,
    },
    { new: true }
  ).populate("rooms");
};

exports.deleteHotel = async (id) => {
  return await Hotel.findByIdAndDelete(id);
};
