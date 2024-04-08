import { getProductById } from "../controllers/productService.js";

const retrieveProduct = async () => {
  try {
    const productId = "4";
    const product = await getProductById(productId);
    console.log("Retrieved Product:", product);
  } catch (error) {
    console.error("Error retrieving product:", error);
  }
};

retrieveProduct();
