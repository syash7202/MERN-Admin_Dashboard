import { Data } from "../models/data.model.js";

const getData = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Data.findById(id);
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export { getData };
