import { userService } from "../services/user.service.js";

const userController = {
  async createUser(req, res) {
    const user = req.body;
    const userData = await userService.createUser(user);
    res.status(201).json({
      status: "success",
      data: userData,
    });
  },
  async getUser(req, res) {
    const id = req.params.id;
    const userData = await userService.getUser(id);
    res.status(200).json({
      status: "success",
      data: userData,
    });
  },
  async getUsers(req, res) {
    const usersData = await userService.getUsers();
    res.status(200).json({
      status: "success",
      data: {
        users: usersData,
      },
    });
  },
  async updateUser(req, res) {
    const id = req.params.id;
    const user = req.body;
    const userData = await userService.updateUser(id, user);
    res.status(200).json({
      status: "success",
      data: userData,
    });
  },
  async deleteUser(req, res) {
    const id = req.params.id;
    await userService.deleteUser(id);
    res.status(200).json({
      status: "success",
      data: null,
    });
  },
};

export { userController };
