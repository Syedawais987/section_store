import prisma from "../db.server.ts";

export const create = async (query) => {
  try {
    let id = query.id ? query.id : undefined;
    const res = await prisma.SectionStore.upsert({
      where: {
        id: id,
      },
      update: query,
      create: query,
    });
    console.log("Response :" + res);
  } catch (error) {
    console.log("Error :" + error);
  }
};
