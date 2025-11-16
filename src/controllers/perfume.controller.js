import { perfumeServices } from "../services/perfume.services.js";

const perfumeController = {
  async getPerfumes(req, res) {
    try {
      const perfumes = await perfumeServices.getAll();
      res.status(200).json(perfumes);
    } catch (error) {
      if (error.message === "Server Error") {
        res.status(500).json({ message: error.message });
      }

      res.status(404).json({ message: error.message });
    }
  },
  async getPerfume(req, res) {
    const id = req.params.id;
    const slug = req.params.slug;

    try {
      const perfume = await perfumeServices.getPerfume({ id, slug });
      res.status(200).json(perfume);
    } catch (error) {
      if (error.message === "Server Error") {
        res.status(500).json({ message: error.message });
      }

      res.status(404).json({ message: error.message });
    }
  },
  async createPerfume(req, res) {
    const perfume = req.body;

    try {
      const perfumeData = await perfumeServices.createPerfume(perfume);
      res.status(201).json(perfumeData);
    } catch (error) {
      if (error.message === "Server Error") {
        res.status(500).json({ message: error.message });
      }

      res.status(400).json({ message: error.message });
    }
  },
  async updatePerfume(req, res) {
    const id = req.params.id;
    const perfume = req.body;

    try {
      const perfumeData = await perfumeServices.updatePerfume(id, perfume);
      res.status(200).json(perfumeData);
    } catch (error) {
      if (error.message === "Server Error") {
        res.status(500).json({ message: error.message });
      }

      res.status(404).json({ message: error.message });
    }
  },
  async deletePerfume(req, res) {
    const id = req.params.id;

    try {
      const perfumeData = await perfumeServices.deletePerfume(id);
      res.status(200).json(perfumeData);
    } catch (error) {
      if (error.message === "Server Error") {
        res.status(500).json({ message: error.message });
      }

      res.status(404).json({ message: error.message });
    }
  },
};

export { perfumeController };
