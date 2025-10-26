import { Router } from "express";
import { userController } from "../controllers/user.controller.js";
import { authenticate } from "../middleware.js";

const userRoutes = Router();

// userRoutes.use(authenticate);

userRoutes.post("/user", userController.createUser);
userRoutes.get("/user/:id", userController.getUser);
userRoutes.get("/users", userController.getUsers);
userRoutes.put("/user/:id", userController.updateUser);
userRoutes.delete("/user/:id", userController.deleteUser);

export { userRoutes };
