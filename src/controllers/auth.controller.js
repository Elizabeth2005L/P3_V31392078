import { authService } from "../services/auth.services.js";

export const authController = {
  async login(req, res) {
    const { email, password } = req.body;
    const token = await authService.login(email, password);
    res.status(200).json({
      status: "success",
      data: {
        token,
      },
    });
  },
  async register(req, res) {
    const { email, password } = req.body;
    const token = await authService.register(email, password);
    res.status(200).json({
      status: "success",
      data: {
        token,
      },
    });
  },
};
