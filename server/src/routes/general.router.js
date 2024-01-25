import { Router } from "express";
import { getData } from "../controllers/general.controller.js";

const router = Router();

router.get("/data/:id", getData);

export default router;
