import { Router } from "express";
import { infoRoutes } from "./info.routes.js";
import { authRoutes } from "./auth.routes.js";
import { userRoutes } from "./user.routes.js";
import { perfumeRoutes } from "./perfume.routes.js";
import { categoryRoutes } from "./category.route.js";

const routes = Router();

// Routas de informacion
routes.use(infoRoutes);

// Rutas de usuarios
routes.use(userRoutes);

// Rutas de autenticación
routes.use(authRoutes);

// Rutas de perfumes
routes.use(perfumeRoutes);

// Rutas de categorias
routes.use(categoryRoutes);

export { routes };
