import { Router } from "express";
import { categoryController } from "../controllers/category.controller.js";

const categoryRoutes = Router();

categoryRoutes.get("/categories", categoryController.getCategories);
categoryRoutes.get("/categories/:slug", categoryController.getCategory);
categoryRoutes.get("/categories/:id", categoryController.getCategory);
categoryRoutes.post("/categories", categoryController.createCategory);
categoryRoutes.put("/categories/:id", categoryController.updateCategory);
categoryRoutes.delete("/categories/:id", categoryController.deleteCategory);

export { categoryRoutes };
