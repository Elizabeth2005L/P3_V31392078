import { Router } from "express";
import { infoController } from "../controllers/info.controller.js";

const infoRoutes = Router()

infoRoutes.get("/about", infoController.getInfoAbout);
infoRoutes.get("/ping", infoController.getPing);

export { infoRoutes };
