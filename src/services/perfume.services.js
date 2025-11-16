import { db } from "../lib/db.js";

const perfumeServices = {
  async getAll() {
    const perfumes = await db.perfumes.findMany();
    return perfumes;
  },
  async getPerfume({ id, slug }) {
    if (id || slug) {
      throw new Error("ID or Slug must be provided");
    }

    try {
      const perfume = await db.perfumes.findUnique({
        where: {
          id: id,
          slug: slug,
        },
      });

      if (!perfume) {
        throw new Error("Perfume not found");
      }

      return perfume;
    } catch (error) {
      throw new Error("Server Error");
    }
  },
  async getPerfumesByCategory(category) {
    const perfumes = await db.perfumes.findMany({
      where: {
        categoriesid: category,
      },
    });
    return perfumes;
  },
  async getPerfumesByTag(tag) {
    const perfumes = await db.perfumes.findMany({
      where: {
        tags: {
          some: {
            name: tag,
          },
        },
      },
    });
    return perfumes;
  },
  async createPerfume(perfume) {
    if (!perfume.name) {
      throw new Error("Perfume name is required");
    }

    const slug = perfume.name.toLowerCase().replace(/\s+/g, "-");

    const perfumeData = await db.perfumes.create({
      data: {
        ...perfume,
        slug,
        categories: {
          connect: {
            id: perfume.categories,
          },
        },
      },
    });
    return perfumeData;
  },
  async updatePerfume(id, perfume) {
    const isExist = await db.perfumes.findUnique({
      where: {
        id: id,
      },
    });

    if (!isExist) {
      throw new Error("Perfume not found");
    }

    const slug = perfume.name.toLowerCase().replace(/\s+/g, "-");

    const newPerfume = await db.perfumes.update({
      where: {
        id: id,
      },
      data: {
        ...perfume,
        slug,
      },
    });
    return newPerfume;
  },
  async deletePerfume(id) {
    const perfumeData = await db.perfumes.delete({
      where: {
        id: id,
      },
    });
    return perfumeData;
  },
};

export { perfumeServices };
