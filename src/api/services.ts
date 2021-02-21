import { products } from "./dummyData/products";
import { featuredProducts } from "./dummyData/featuredProducts";

const fetchProductsByCategory = (category: string) => {
  return products.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase()
  );
};

const fetchFeaturedProducts = () => {
  return products.filter((product) => featuredProducts.includes(product.id));
};

export const service = {
  fetchProductsByCategory: fetchProductsByCategory,
  fetchFeaturedProducts: fetchFeaturedProducts,
};
