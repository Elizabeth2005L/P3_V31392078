import { Router } from "express";
import { perfumeController } from "../controllers/perfume.controller.js";

const perfumeRoutes = Router();

perfumeRoutes.get("/perfumes", perfumeController.getPerfumes);
perfumeRoutes.get("/perfumes/:slug", perfumeController.getPerfume);
perfumeRoutes.get("/perfumes/:id", perfumeController.getPerfume);
perfumeRoutes.post("/perfumes", perfumeController.createPerfume);
perfumeRoutes.put("/perfumes/:id", perfumeController.updatePerfume);
perfumeRoutes.delete("/perfumes/:id", perfumeController.deletePerfume);

export { perfumeRoutes };
