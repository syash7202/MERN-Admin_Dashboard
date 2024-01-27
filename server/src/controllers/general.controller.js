import { countryToAlpha3 } from "country-to-iso";
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

// visualization controllers

const geoMapping = async (req, res) => {
  try {
    const locations = await Data.find();

    const mappedLocations = locations.reduce((acc, { country }) => {
      const countryISO3 = countryToAlpha3(country);
      if (!acc[countryISO3]) {
        acc[countryISO3] = 0;
      }
      acc[countryISO3]++;
      return acc;
    }, {});

    const formatedLocations = Object.entries(mappedLocations).map(
      ([country, count]) => {
        return { id: country, value: count };
      }
    );

    res.status(200).json(formatedLocations);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getLineChart = async (req, res) => {
  try {
    const lineChartStats = await Data.find();

    res.status(200).json(lineChartStats);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getRadarChart = async (req, res) => {
  try {
    const data = await Data.find();

    const regions = data.reduce((acc, { region }) => {
      if (!acc[region]) {
        acc[region] = 0;
      }
      acc[region]++;

      return acc;
    }, {});

    const extractedData = Object.entries(regions).map(([region, count], i) => {
      return { region: region, articles: count };
    });

    res.status(200).json(extractedData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export { getData, geoMapping, getLineChart, getRadarChart };
