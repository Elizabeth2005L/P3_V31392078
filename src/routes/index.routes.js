import { Router } from "express";
import { infoRoutes } from "./info.routes.js";

const routes = Router();

// Routas de informacion
routes.use(infoRoutes);

export { routes };
