import { Product } from "../models/product";

// Example function to generate a simple unique ID (you might want to use a more robust solution)
export const generateUniqueId = (): string => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const addProduct = (button: HTMLElement, product: Product) => {
  button.addEventListener("click", (event: MouseEvent) => {
    event.preventDefault();

    const existingProductsString = localStorage.getItem("products");
    const existingProducts = existingProductsString ? JSON.parse(existingProductsString) : [];

    // Generate a unique ID
    const uniqueId = generateUniqueId();

    // Assign the unique ID to the product
    const productWithUniqueId: Product = { ...product, uniqueId };

    existingProducts.push(productWithUniqueId);

    existingProducts.sort((a: Product, b: Product) => {
      const idA = a._id || ""; // Use empty string if _id is undefined
      const idB = b._id || ""; // Use empty string if _id is undefined
      return idA.localeCompare(idB);
    });

    console.log(existingProducts);

    localStorage.setItem("products", JSON.stringify(existingProducts));
  });
};
