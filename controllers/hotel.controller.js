const hotelService = require("../services/hotel.service");

exports.getAllHotels = async (req, res) => {
  try {
    const hotels = await hotelService.getAllHotels();
    res.status(200).json(hotels);
  } catch (error) {
    console.error("Error in getAllHotels:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getHotelById = async (req, res) => {
  const { id } = req.params;
  try {
    const hotel = await hotelService.getHotelById(id);

    if (!hotel) {
      return res.status(404).json({ message: "Hotel not found" });
    }

    res.status(200).json(hotel);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.createHotel = async (req, res) => {
  try {
    const hotel = await hotelService.createHotel(req.body);
    res.status(201).json(hotel);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateHotel = async (req, res) => {
  try {
    const hotel = await hotelService.updateHotel(req.params.id, req.body);
    res.status(200).json(hotel);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteHotel = async (req, res) => {
  try {
    await hotelService.deleteHotel(req.params.id);
    res.status(200).json({ message: "Hotel deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
