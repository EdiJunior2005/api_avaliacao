import Vehicle from "../models/VehicleModel.js";

export const store = async (req, res) => {
  try {
    const vehicle = await Vehicle.create(req.body);
    res.status(201).json(vehicle);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const index = async (req, res) => {
  try {
    const vehicles = await Vehicle.find().exec();
    res.json(vehicles);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const show = async (req, res) => {
  try {
    const vehicle = await Vehicle.findById(req.params.id).exec();
    if (!vehicle) {
      return res.status(404).json({ error: "Vehicle not found" });
    }
    res.json(vehicle);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const update = async (req, res) => {
  try {
    const vehicle = await Vehicle.findByIdAndUpdate(req.params.id, {
      plate: req.body.plate,
      model: req.body.model,
      year: req.body.year,
      owner: req.body.owner,
      maintenances: req.body.maintenances,
    }).exec();

    if (!vehicle) {
      return res.status(404).json({ error: "Vehicle not found" });
    }
    res.json(vehicle);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const destroy = async (req, res) => {
  try {
    const vehicle = await Vehicle.findByIdAndDelete(req.params.id).exec();
    if (!vehicle) {
      return res.status(404).json({ error: "Vehicle not found" });
    }
    res.json({ message: "Vehicle deleted successfully" });
  } catch (error) {
    res.status(400).send(error);
  }
};
