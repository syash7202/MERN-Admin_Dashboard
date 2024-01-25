import { Router } from "express";
import { geoMapping, getData } from "../controllers/general.controller.js";

const router = Router();

router.get("/data/:id", getData);
router.get("/geoMap", geoMapping);

export default router;
