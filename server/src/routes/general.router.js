import { Router } from "express";
import {
  geoMapping,
  getData,
  getLineChart,
  getRadarChart,
} from "../controllers/general.controller.js";

const router = Router();

router.get("/data/:id", getData);
router.get("/dashboard", getLineChart);
router.get("/geoMap", geoMapping);
router.get("/lineChart", getLineChart);
router.get("/radarChart", getRadarChart);

export default router;
