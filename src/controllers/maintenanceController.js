import Maintenance from "../models/MaintenanceModel.js";

export const store = async (req, res) => {
  try {
    const maintenance = await Maintenance.create(req.body);
    res.status(201).json(maintenance);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const index = async (req, res) => {
  try {
    const maintenances = await Maintenance.find().exec();
    res.json(maintenances);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const show = async (req, res) => {
  try {
    const maintenance = await Maintenance.findById(req.params.id).exec();
    if (!maintenance) {
      return res.status(404).json({ error: "Maintenance not found" });
    }
    res.json(maintenance);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const update = async (req, res) => {
  try {
    const maintenance = await Maintenance.findByIdAndUpdate(req.params.id, {
      workshop: req.body.workshop,
      vehicle: req.body.vehicle,
      service: req.body.service,
      date: req.body.date,
      totalCost: req.body.totalCost,
    }).exec();

    if (!maintenance) {
      return res.status(404).json({ error: "Maintenance not found" });
    }
    res.json(maintenance);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const destroy = async (req, res) => {
  try {
    const maintenance = await Maintenance.findByIdAndDelete(
      req.params.id
    ).exec();
    if (!maintenance) {
      return res.status(404).json({ error: "Maintenance not found" });
    }
    res.json({ message: "Maintenance deleted successfully" });
  } catch (error) {
    res.status(400).send(error);
  }
};
