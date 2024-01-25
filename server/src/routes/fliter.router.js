import { Router } from "express";
import {
  getEndYear,
  getTopic,
  getSector,
  getRegion,
  getPEST,
  getSource,
  getCountry,
} from "../controllers/fliter.controller.js";

const router = Router();

//filter routes
router.get("/year", getEndYear);
router.get("/topic", getTopic);
router.get("/sectors", getSector);
router.get("/regions", getRegion);
router.get("/pestle", getPEST);
router.get("/source", getSource);
router.get("/country", getCountry);

export default router;
