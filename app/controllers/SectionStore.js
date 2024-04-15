//app/controllers/SectionStore.js
import prisma from "../db.server";

export const create = async (query) => {
  try {
    let id = query.id ? query.id : undefined;
    const res = await prisma.SectionStore.upsert({
      where: { id: query["id"] || "" },

      update: query,
      create: query,
      select: { id: true },
    });
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
