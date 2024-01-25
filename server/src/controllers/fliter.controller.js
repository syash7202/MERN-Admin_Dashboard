import { Data } from "../models/data.model.js";

const getEndYear = async (req, res) => {
  try {
    const { search = "" } = req.query;

    const endYear = await Data.find({
      $or: [
        { end_year: { $regex: new RegExp(search, "i") } },
        // can multiple check field for better search
      ],
    });

    const total = await Data.countDocuments({
      end_year: { $regex: search, $options: "i" }, // total number of that region matches found in DB
    });

    res.status(200).json({
      endYear,
      total,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getTopic = async (req, res) => {
  try {
    const { search = "" } = req.query;

    const topic = await Data.find({
      $or: [
        { topic: { $regex: new RegExp(search, "i") } },
        // can multiple check field for better search
      ],
    });

    const total = await Data.countDocuments({
      topic: { $regex: search, $options: "i" }, // total number of that region matches found in DB
    });

    res.status(200).json({
      topic,
      total,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getSector = async (req, res) => {
  try {
    const sector = await Data.find({ sector: "Energy" });
    res.status(200).json(sector);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getRegion = async (req, res) => {
  try {
    const { search = "" } = req.query;

    const region = await Data.find({
      $or: [
        { region: { $regex: new RegExp(search, "i") } },
        // can multiple check field for better search
      ],
    });

    const total = await Data.countDocuments({
      region: { $regex: search, $options: "i" }, // total number of that region matches found in DB
    });

    res.status(200).json({
      region,
      total,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getPEST = async (req, res) => {
  try {
    const { search = "" } = req.query;

    const pestle = await Data.find({
      $or: [
        { pestle: { $regex: new RegExp(search, "i") } },
        // can multiple check field for better search
      ],
    });

    const total = await Data.countDocuments({
      pestle: { $regex: search, $options: "i" }, // total number of that region matches found in DB
    });

    res.status(200).json({
      pestle,
      total,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getSource = async (req, res) => {
  try {
    const { search = "" } = req.query;

    const source = await Data.find({
      $or: [
        { source: { $regex: new RegExp(search, "i") } },
        // can multiple check field for better search
      ],
    });

    const total = await Data.countDocuments({
      source: { $regex: search, $options: "i" }, // total number of that region matches found in DB
    });

    res.status(200).json({
      source,
      total,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getCountry = async (req, res) => {
  try {
    const { search = "" } = req.query;

    const country = await Data.find({
      $or: [
        { country: { $regex: new RegExp(search, "i") } },
        // can multiple check field for better search
      ],
    });

    const total = await Data.countDocuments({
      country: { $regex: search, $options: "i" }, // total number of that region matches found in DB
    });

    res.status(200).json({
      country,
      total,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export {
  getEndYear,
  getTopic,
  getSector,
  getRegion,
  getPEST,
  getSource,
  getCountry,
};
