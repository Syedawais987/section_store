import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createProduct = async (productData) => {
  try {
    const newProduct = await prisma.product.create({
      data: productData,
    });
    return newProduct;
  } catch (error) {
    console.error("Error creating product:", error);
    throw new Error("Failed to create product");
  }
};
export const getProductById = async (productId) => {
  try {
    const product = await prisma.product.findUnique({
      where: { id: productId },
    });
    return product;
  } catch (error) {
    console.error("Error retrieving product:", error);
    throw new Error("Failed to retrieve product");
  }
};
