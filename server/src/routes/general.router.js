import { Router } from "express";
import {
  geoMapping,
  getData,
  getLineChart,
} from "../controllers/general.controller.js";

const router = Router();

router.get("/data/:id", getData);
router.get("/dashboard", getLineChart);
router.get("/geoMap", geoMapping);
router.get("/lineChart", getLineChart);

export default router;
