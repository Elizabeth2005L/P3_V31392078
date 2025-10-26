import { db } from "../lib/db.js";

const userService = {
  async createUser(user) {
    const userData = await db.user.create({
      data: user,
    });
    return userData;
  },
  async getUser(id) {
    const userData = await db.user.findUnique({
      where: {
        id: id,
      },
    });
    return userData;
  },
  async getUsers() {
    const usersData = await db.user.findMany();
    return usersData;
  },
  async updateUser(id, user) {
    const userData = await db.user.update({
      where: {
        id: id,
      },
      data: user,
    });
    return userData;
  },
  async deleteUser(id) {
    const userData = await db.user.delete({
      where: {
        id: id,
      },
    });
    return userData;
  },
};

export { userService };
