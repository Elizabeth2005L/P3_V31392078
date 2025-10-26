import { Router } from "express";
import { infoRoutes } from "./info.routes.js";
import { authRoutes } from "./auth.routes.js";
import { userRoutes } from "./user.routes.js";

const routes = Router();

// Routas de informacion
routes.use(infoRoutes);

// Rutas de usuarios
routes.use(userRoutes);

// Rutas de autenticación
routes.use(authRoutes);

export { routes };
