import { categoryServices } from "../services/category.services.js";

const categoryController = {
  async getCategories(req, res) {
    try {
      const categories = await categoryServices.getAll();
      res.status(200).json(categories);
    } catch (error) {
      if (error.message === "Server Error") {
        res.status(500).json({ message: error.message });
      }

      res.status(404).json({ message: error.message });
    }
  },
  async getCategory(req, res) {
    const id = req.params.id;
    const slug = req.params.slug;

    try {
      const category = await categoryServices.getCategory({ id, slug });
      res.status(200).json(category);
    } catch (error) {
      if (error.message === "Server Error") {
        res.status(500).json({ message: error.message });
      }

      res.status(404).json({ message: error.message });
    }
  },
  async createCategory(req, res) {
    const category = req.body;

    try {
      const categoryData = await categoryServices.createCategory(category);
      res.status(201).json(categoryData);
    } catch (error) {
      if (error.message === "Server Error") {
        res.status(500).json({ message: error.message });
      }

      res.status(400).json({ message: error.message });
    }
  },
  async updateCategory(req, res) {
    const id = req.params.id;
    const category = req.body;

    try {
      const categoryData = await categoryServices.updateCategory(id, category);
      res.status(200).json(categoryData);
    } catch (error) {
      if (error.message === "Server Error") {
        res.status(500).json({ message: error.message });
      }

      res.status(404).json({ message: error.message });
    }
  },
  async deleteCategory(req, res) {
    const id = req.params.id;

    try {
      const categoryData = await categoryServices.deleteCategory(id);
      res.status(200).json(categoryData);
    } catch (error) {
      if (error.message === "Server Error") {
        res.status(500).json({ message: error.message });
      }

      res.status(404).json({ message: error.message });
    }
  },
};

export { categoryController };
