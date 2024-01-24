import { Router } from "express";
import { userData } from "../controllers/general.controller.js";

const router = Router();

router.get("/end-year/:id", userData);

export default router;
