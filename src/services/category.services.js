import { db } from "../lib/db.js";

const categoryServices = {
  async getAll() {
    const categories = await db.categories.findMany();
    return categories;
  },
  async getCategory({ id, slug }) {
    const category = await db.categories.findUnique({
      where: {
        slug,
        id,
      },
    });
    return category;
  },
  async createCategory(category) {
    const categoryData = await db.categories.create({
      data: category,
    });
    return categoryData;
  },
  async updateCategory(id, category) {
    const categoryData = await db.categories.update({
      where: {
        id: id,
      },
      data: category,
    });
    return categoryData;
  },
  async deleteCategory(id) {
    const categoryData = await db.categories.delete({
      where: {
        id: id,
      },
    });
    return categoryData;
  },
};

export { categoryServices };
