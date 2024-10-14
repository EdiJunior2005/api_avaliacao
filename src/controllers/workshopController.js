import Workshop from "../models/WorkshopModel.js";

export const store = async (req, res) => {
  try {
    const workshop = await Workshop.create(req.body);

    res.status(201).send(workshop);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const index = async (req, res) => {
  try {
    const workshops = await Workshop.find().exec();
    res.send(workshops);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const show = async (req, res) => {
  try {
    const workshop = await Workshop.findById(req.params.id).exec();
    if (!workshop) {
      return res.status(404).send({ error: "workshop not found" });
    }
    res.send(workshop);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const update = async (req, res) => {
  try {
    const workshop = await Workshop.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      address: req.body.address,
      specialties: req.body.special,
    }).exec();

    if (!workshop) {
      return res.status(404).send({ error: "workshop not found" });
    }
    res.send(workshop);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const destroy = async (req, res) => {
  try {
    const workshop = await Workshop.findByIdAndDelete(req.params.id).exec();
    if (!workshop) {
      return res.status(404).send({ error: "workshop not found" });
    }
    res.send({ message: "workshop deleted successfully" });
  } catch (error) {
    res.status(400).send(error);
  }
};
